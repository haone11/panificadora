import React, { useState, useEffect, useMemo } from 'react';
import { Recipe, Ingredient } from '../types';
import { ArrowLeft, ChefHat, Clock, Scale, Check, Flame, Timer, Info, Star, PenLine, Save, Settings, AlertTriangle, HelpingHand } from 'lucide-react';
import Timeline from './Timeline';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, onBack }) => {
  const [checkedIngredients, setCheckedIngredients] = useState<Set<number>>(new Set());
  const [rating, setRating] = useState<number>(0);
  const [notes, setNotes] = useState<string>('');
  const [isSaved, setIsSaved] = useState(false);
  const [targetWeight, setTargetWeight] = useState<'1000g' | '750g'>('1000g');

  // Load user data from LocalStorage on mount
  useEffect(() => {
    const storageKey = `panificadora_user_data_${recipe.id}`;
    const savedData = localStorage.getItem(storageKey);
    if (savedData) {
      const { rating: savedRating, notes: savedNotes } = JSON.parse(savedData);
      setRating(savedRating || 0);
      setNotes(savedNotes || '');
    } else {
      setRating(0);
      setNotes('');
    }
    setCheckedIngredients(new Set()); // Reset checks when recipe changes
    setTargetWeight('1000g'); // Reset weight to default
  }, [recipe.id]);

  // Save data whenever rating or notes change
  const handleSaveData = (newRating: number, newNotes: string) => {
    const storageKey = `panificadora_user_data_${recipe.id}`;
    localStorage.setItem(storageKey, JSON.stringify({ rating: newRating, notes: newNotes }));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleRating = (score: number) => {
    setRating(score);
    handleSaveData(score, notes);
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setNotes(text);
    handleSaveData(rating, text);
  };

  const toggleIngredient = (index: number) => {
    const next = new Set(checkedIngredients);
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }
    setCheckedIngredients(next);
  };

  // Helper to scale ingredient strings
  const scaleAmount = (amountStr: string, factor: number): string => {
    if (factor === 1) return amountStr;

    // Try to match number at start
    const match = amountStr.match(/^([0-9.,]+)\s*(.*)$/);
    if (!match) return amountStr; // Can't parse, return original

    const numStr = match[1].replace(',', '.');
    const unit = match[2];
    const val = parseFloat(numStr);

    if (isNaN(val)) return amountStr;

    let newVal = val * factor;
    
    // Formatting: 
    // If it's effectively an integer (e.g. 3.0), show no decimals.
    // If it has decimals, show max 1 decimal place.
    const formattedVal = Number.isInteger(newVal) ? newVal.toString() : newVal.toFixed(1).replace(/\.0$/, '');

    return `${formattedVal.replace('.', ',')} ${unit}`;
  };

  // Memoized ingredients based on weight selection
  const currentIngredients = useMemo(() => {
    // 750g is 75% of 1000g.
    const scaleFactor = targetWeight === '750g' ? 0.75 : 1;
    return recipe.ingredients.map(ing => ({
      ...ing,
      amount: scaleAmount(ing.amount, scaleFactor)
    }));
  }, [recipe.ingredients, targetWeight]);

  const isOnline = recipe.source === 'online';
  const is750gMode = targetWeight === '750g';

  return (
    <div className="bg-gray-50/50 min-h-screen pb-24 animate-in fade-in duration-300">
      
      {/* Sticky Header */}
      <div className={`sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b border-gray-200/50 px-4 py-3 flex items-center gap-4 shadow-sm`}>
        <button 
          onClick={onBack}
          className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
        >
          <ArrowLeft size={22} />
        </button>
        <div className="flex-1 truncate">
          <h2 className="font-serif font-bold text-gray-800 text-lg truncate">{recipe.title}</h2>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pt-6">
        
        {/* Machine Dashboard Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-bread-900/5 overflow-hidden mb-6 border border-bread-100">
          <div className={`px-6 py-4 flex items-center justify-between ${isOnline ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-gradient-to-r from-bread-600 to-bread-800'} text-white`}>
            <div className="flex items-center gap-2 text-white/90 font-medium text-sm uppercase tracking-wider">
               <ChefHat size={16} /> Configuración SBB 850 E1
            </div>
            {isOnline && <span className="bg-white/20 text-xs px-2 py-1 rounded-md backdrop-blur-sm">Receta Web</span>}
          </div>
          
          <div className="p-6">
            {/* Weight Selector Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-1 rounded-xl inline-flex relative">
                <div 
                  className={`absolute top-1 bottom-1 w-[50%] bg-white rounded-lg shadow-sm transition-all duration-300 ease-out ${targetWeight === '750g' ? 'left-1' : 'left-[48%]'}`} 
                />
                <button 
                  onClick={() => setTargetWeight('750g')}
                  className={`relative z-10 px-6 py-2 text-sm font-bold transition-colors ${targetWeight === '750g' ? 'text-bread-800' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  750g (Ajustado)
                </button>
                <button 
                  onClick={() => setTargetWeight('1000g')}
                  className={`relative z-10 px-6 py-2 text-sm font-bold transition-colors ${targetWeight === '1000g' ? 'text-bread-800' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  1000g (Original)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-8 text-center divide-x divide-gray-100">
              {/* Program */}
              <div className="flex flex-col items-center justify-center group">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Programa</span>
                <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-bread-50 text-bread-800 border-4 border-bread-100 mb-2">
                  <span className="text-3xl md:text-4xl font-black font-serif">{recipe.program}</span>
                </div>
                <span className="font-medium text-bread-800 text-sm md:text-base leading-tight px-1">{recipe.programName}</span>
              </div>

              {/* Weight Display */}
              <div className="flex flex-col items-center justify-center px-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Peso Máquina</span>
                <Scale size={32} className={`mb-2 ${is750gMode ? 'text-blue-500' : 'text-bread-400'}`} />
                <span className={`text-lg font-bold ${is750gMode ? 'text-blue-600' : 'text-gray-800'}`}>
                  {is750gMode ? '1000g*' : (recipe.weight || '1000g')}
                </span>
                {is750gMode && <span className="text-[10px] text-blue-600 leading-none mt-1 font-bold">*Mínimo disponible</span>}
              </div>

              {/* Browning/Time */}
              <div className="flex flex-col items-center justify-center px-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  {recipe.browning ? 'Tostado' : 'Tiempo'}
                </span>
                {recipe.browning ? (
                  <>
                    <Flame size={32} className={`mb-2 ${is750gMode ? 'text-blue-500' : (recipe.browning === 'Oscuro' ? 'text-bread-700' : recipe.browning === 'Medio' ? 'text-bread-500' : 'text-bread-300')}`} />
                    <span className={`text-lg font-bold ${is750gMode ? 'text-blue-600' : 'text-gray-800'}`}>
                      {is750gMode ? 'Claro*' : recipe.browning}
                    </span>
                    {is750gMode && <span className="text-[10px] text-blue-600 leading-none mt-1 font-bold">*Ajuste recomendado</span>}
                  </>
                ) : (
                  <>
                    <Timer size={32} className="text-bread-400 mb-2" />
                    <span className="text-lg font-bold text-gray-800">{recipe.time}</span>
                  </>
                )}
              </div>
            </div>
            
            {/* Timeline Feature */}
            <div className="mt-8 border-t border-gray-100 pt-4">
              <Timeline program={recipe.program} totalTimeStr={recipe.time} />
            </div>

            {/* 750g Info Banner */}
            {is750gMode && (
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3 text-left animate-in slide-in-from-top-2">
                <Settings className="text-blue-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-blue-800 text-sm">Modo 750g (Optimizado)</h4>
                  <p className="text-blue-700/90 text-sm mt-1 mb-2">
                    Cantidades ajustadas al 75%. Es el tamaño ideal para hacer panes más pequeños en esta máquina sin problemas de amasado.
                  </p>
                  <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                    <li>Configura peso en <strong>1000g</strong> (El mínimo de tu máquina).</li>
                    <li>Configura el tostado en <strong>Claro</strong> para no resecar.</li>
                    <li>Las aspas trabajarán bien con esta cantidad.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* User Rating Section */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-yellow-100 mb-8 flex flex-col items-center justify-center gap-2">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Tu Valoración</span>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button 
                key={star}
                onClick={() => handleRating(star)}
                className="focus:outline-none transition-transform hover:scale-110 active:scale-95"
              >
                <Star 
                  size={32} 
                  className={`${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200 fill-gray-50'}`} 
                  strokeWidth={1.5}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Layout Split for Desktop */}
        <div className="md:grid md:grid-cols-[1fr,1.5fr] md:gap-8 items-start">
          
          {/* Left Column: Ingredients */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-serif font-bold text-gray-800">
                Ingredientes
                {is750gMode && <span className="ml-2 text-sm font-sans font-normal text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">x0.75</span>}
              </h3>
              <span className="text-xs bg-bread-100 text-bread-800 px-2 py-1 rounded-full font-bold ml-auto">
                {currentIngredients.length}
              </span>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-1 bg-bread-50/50 border-b border-gray-100 text-center text-xs text-gray-400 italic">
                Orden: Líquidos abajo, harina en medio, levadura arriba
              </div>
              <div className="divide-y divide-gray-50">
                {currentIngredients.map((ing, idx) => {
                  const isChecked = checkedIngredients.has(idx);
                  return (
                    <button 
                      key={idx} 
                      onClick={() => toggleIngredient(idx)}
                      className={`w-full flex items-center gap-4 p-4 text-left transition-all duration-200 hover:bg-gray-50 group ${isChecked ? 'bg-gray-50/50' : 'bg-white'}`}
                    >
                      <div className={`
                        flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300
                        ${isChecked ? 'bg-green-500 border-green-500 scale-110' : 'border-gray-300 group-hover:border-bread-400'}
                      `}>
                        {isChecked && <Check size={14} className="text-white stroke-[3]" />}
                      </div>
                      <div className={`flex flex-col ${isChecked ? 'opacity-40 blur-[0.5px] transition-all' : ''}`}>
                        <span className={`font-bold text-lg leading-none mb-1 ${is750gMode ? 'text-blue-700' : 'text-gray-900'}`}>{ing.amount}</span>
                        <span className="text-gray-600 font-medium text-sm leading-tight">{ing.name}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Steps & Tips */}
          <div>
            <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">Instrucciones</h3>
            
            <div className="space-y-6 relative mb-8">
               {/* Vertical line connecting steps */}
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200 hidden md:block"></div>

              {recipe.steps.map((step, idx) => (
                <div key={idx} className="relative flex gap-5 group">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-bread-200 text-bread-700 flex items-center justify-center font-bold font-serif shadow-sm group-hover:border-bread-500 group-hover:text-bread-900 group-hover:scale-110 transition-all">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-5 rounded-xl rounded-tl-none shadow-sm border border-gray-100 group-hover:shadow-md group-hover:border-bread-200 transition-all">
                    <p className="text-gray-700 leading-relaxed font-medium">{step}</p>
                  </div>
                </div>
              ))}
            </div>

            {recipe.tips && (
              <div className="mb-8 bg-amber-50 rounded-2xl p-5 border border-amber-100 flex gap-4 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                    <Info size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-amber-900 mb-1">Consejo del Chef</h4>
                  <p className="text-amber-800/80 text-sm leading-relaxed">{recipe.tips}</p>
                </div>
              </div>
            )}

            {/* Notes Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <PenLine size={20} />
                  <h3 className="font-bold font-serif">Mis Notas de Cocina</h3>
                </div>
                {isSaved && <span className="text-xs text-green-600 flex items-center gap-1 animate-pulse"><Save size={12}/> Guardado</span>}
              </div>
              <textarea
                value={notes}
                onChange={handleNotesChange}
                placeholder="Apunta aquí tus ajustes: 'Más sal', 'Menos tiempo', 'Añadir nueces'..."
                className="w-full min-h-[120px] p-4 bg-yellow-50/50 border border-yellow-100 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bread-300 focus:bg-white transition-all text-sm leading-relaxed resize-none"
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;