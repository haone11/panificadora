import React, { useState } from 'react';
import { Recipe, RecipeCategory, Ingredient } from '../types';
import { Plus, Trash2, Save, ChefHat, Clock, Scale } from 'lucide-react';

interface RecipeCreatorProps {
  onSave: (recipe: Recipe) => void;
}

const RecipeCreator: React.FC<RecipeCreatorProps> = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<RecipeCategory>(RecipeCategory.CLASSIC);
  const [program, setProgram] = useState(1);
  const [time, setTime] = useState('3:00 h');
  const [weight, setWeight] = useState<'1000g' | '1250g' | '1500g'>('1000g');
  const [browning, setBrowning] = useState<'Claro' | 'Medio' | 'Oscuro'>('Medio');
  
  const [ingredients, setIngredients] = useState<Ingredient[]>([{ amount: '', name: '' }]);
  const [steps, setSteps] = useState<string[]>(['']);

  const handleAddIngredient = () => setIngredients([...ingredients, { amount: '', name: '' }]);
  const handleRemoveIngredient = (idx: number) => setIngredients(ingredients.filter((_, i) => i !== idx));
  const handleIngredientChange = (idx: number, field: keyof Ingredient, value: string) => {
    const newIngs = [...ingredients];
    newIngs[idx] = { ...newIngs[idx], [field]: value };
    setIngredients(newIngs);
  };

  const handleAddStep = () => setSteps([...steps, '']);
  const handleRemoveStep = (idx: number) => setSteps(steps.filter((_, i) => i !== idx));
  const handleStepChange = (idx: number, value: string) => {
    const newSteps = [...steps];
    newSteps[idx] = value;
    setSteps(newSteps);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    const newRecipe: Recipe = {
      id: `custom-${Date.now()}`,
      title,
      category,
      source: 'custom',
      program,
      programName: `Prog. ${program}`,
      time,
      weight,
      browning,
      ingredients: ingredients.filter(i => i.name && i.amount),
      steps: steps.filter(s => s.trim()),
      imageId: '',
    };

    onSave(newRecipe);
    // Reset form
    setTitle('');
    setIngredients([{ amount: '', name: '' }]);
    setSteps(['']);
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-bread-200 overflow-hidden h-full">
      <div className="bg-bread-600 p-6 text-white flex items-center gap-4">
        <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
           <ChefHat size={24} />
        </div>
        <div>
          <h2 className="text-xl font-bold font-serif">Mis Recetas</h2>
          <p className="text-bread-100 text-xs uppercase tracking-wider font-medium">Añadir Nueva</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        
        {/* Basic Info */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nombre de la Receta</label>
            <input 
              required
              type="text" 
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Ej: Pan de la Abuela"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-bread-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Categoría</label>
              <select 
                value={category}
                onChange={e => setCategory(e.target.value as RecipeCategory)}
                className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
              >
                {Object.values(RecipeCategory).map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
               <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Programa</label>
               <select 
                value={program}
                onChange={e => setProgram(Number(e.target.value))}
                className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
              >
                {Array.from({length: 16}, (_, i) => i + 1).map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
             <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1 flex items-center gap-1"><Clock size={10}/> Tiempo</label>
                <input type="text" value={time} onChange={e => setTime(e.target.value)} className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm" placeholder="3:00 h" />
             </div>
             <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1 flex items-center gap-1"><Scale size={10}/> Peso</label>
                <select value={weight} onChange={e => setWeight(e.target.value as any)} className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm">
                  <option value="1000g">1000g</option>
                  <option value="1250g">1250g</option>
                  <option value="1500g">1500g</option>
                </select>
             </div>
             <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Tostado</label>
                <select value={browning} onChange={e => setBrowning(e.target.value as any)} className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm">
                  <option value="Claro">Claro</option>
                  <option value="Medio">Medio</option>
                  <option value="Oscuro">Oscuro</option>
                </select>
             </div>
          </div>
        </div>

        {/* Ingredients */}
        <div>
           <div className="flex justify-between items-center mb-2">
             <label className="block text-xs font-bold text-gray-500 uppercase">Ingredientes</label>
             <button type="button" onClick={handleAddIngredient} className="text-bread-600 hover:bg-bread-50 p-1 rounded-full"><Plus size={16}/></button>
           </div>
           <div className="space-y-2 max-h-40 overflow-y-auto pr-1 custom-scrollbar">
             {ingredients.map((ing, idx) => (
               <div key={idx} className="flex gap-2">
                 <input 
                    placeholder="Cant." 
                    value={ing.amount} 
                    onChange={e => handleIngredientChange(idx, 'amount', e.target.value)}
                    className="w-1/3 p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
                 />
                 <input 
                    placeholder="Ingrediente" 
                    value={ing.name} 
                    onChange={e => handleIngredientChange(idx, 'name', e.target.value)}
                    className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
                 />
                 {ingredients.length > 1 && (
                   <button type="button" onClick={() => handleRemoveIngredient(idx)} className="text-gray-400 hover:text-red-500"><Trash2 size={16}/></button>
                 )}
               </div>
             ))}
           </div>
        </div>

        {/* Steps */}
        <div>
           <div className="flex justify-between items-center mb-2">
             <label className="block text-xs font-bold text-gray-500 uppercase">Pasos</label>
             <button type="button" onClick={handleAddStep} className="text-bread-600 hover:bg-bread-50 p-1 rounded-full"><Plus size={16}/></button>
           </div>
           <div className="space-y-2 max-h-40 overflow-y-auto pr-1 custom-scrollbar">
             {steps.map((step, idx) => (
               <div key={idx} className="flex gap-2 items-start">
                 <span className="text-xs font-bold text-gray-400 mt-2">{idx + 1}</span>
                 <textarea 
                    value={step} 
                    onChange={e => handleStepChange(idx, e.target.value)}
                    className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm resize-none"
                    rows={2}
                    placeholder="Describe el paso..."
                 />
                 {steps.length > 1 && (
                   <button type="button" onClick={() => handleRemoveStep(idx)} className="text-gray-400 hover:text-red-500 mt-2"><Trash2 size={16}/></button>
                 )}
               </div>
             ))}
           </div>
        </div>

        <button 
          type="submit" 
          className="w-full py-3 bg-bread-600 text-white font-bold rounded-xl hover:bg-bread-700 shadow-lg shadow-bread-600/30 flex items-center justify-center gap-2 transition-transform active:scale-95"
        >
          <Save size={18} /> Guardar Receta
        </button>

      </form>
    </div>
  );
};

export default RecipeCreator;