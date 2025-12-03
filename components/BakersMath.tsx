import React, { useState, useEffect } from 'react';
import { Calculator, Scale, RefreshCw } from 'lucide-react';

const BakersMath: React.FC = () => {
  const [flour, setFlour] = useState<number>(500);
  const [hydration, setHydration] = useState<number>(60);
  const [saltPct, setSaltPct] = useState<number>(2);
  const [yeastPct, setYeastPct] = useState<number>(1); // Fresh yeast usually around 2%, Dry 1% or less. Using generic.

  const [water, setWater] = useState(0);
  const [salt, setSalt] = useState(0);
  const [yeast, setYeast] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);

  useEffect(() => {
    const w = flour * (hydration / 100);
    const s = flour * (saltPct / 100);
    const y = flour * (yeastPct / 100);
    
    setWater(Math.round(w));
    setSalt(parseFloat(s.toFixed(1)));
    setYeast(parseFloat(y.toFixed(1)));
    setTotalWeight(flour + w + s + y);
  }, [flour, hydration, saltPct, yeastPct]);

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-bread-200 overflow-hidden">
      <div className="bg-bread-600 p-6 text-white flex items-center gap-4">
        <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
           <Calculator size={24} />
        </div>
        <div>
          <h2 className="text-xl font-bold font-serif">Calculadora Panadera</h2>
          <p className="text-bread-100 text-xs uppercase tracking-wider font-medium">Porcentajes de Panadero</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm text-gray-500 mb-6">
          Calcula la receta perfecta basándote solo en la harina que tienes. Ideal para gastar restos de paquetes.
        </p>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="col-span-2">
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Harina disponible (g)</label>
            <div className="relative">
              <input 
                type="number" 
                value={flour}
                onChange={(e) => setFlour(Number(e.target.value))}
                className="w-full p-3 pl-4 text-xl font-bold bg-bread-50 border border-bread-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-bread-400 text-bread-900"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">100%</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Hidratación %</label>
            <input 
              type="number" 
              value={hydration}
              onChange={(e) => setHydration(Number(e.target.value))}
              className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bread-400 text-gray-800"
            />
            <p className="text-[10px] text-gray-400 mt-1">Normal: 60%. Integral: 65-70%</p>
          </div>

          <div>
             <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Sal %</label>
            <input 
              type="number" 
              step="0.1"
              value={saltPct}
              onChange={(e) => setSaltPct(Number(e.target.value))}
              className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bread-400 text-gray-800"
            />
            <p className="text-[10px] text-gray-400 mt-1">Estándar: 1.8% - 2%</p>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
           <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
             <span className="text-sm font-bold text-gray-500 uppercase">Ingredientes a usar</span>
             <Scale size={16} className="text-gray-400" />
           </div>
           
           <div className="space-y-3">
             <div className="flex justify-between items-center">
               <span className="text-gray-700 font-medium">Harina</span>
               <span className="font-bold text-lg text-gray-900">{flour} g</span>
             </div>
             <div className="flex justify-between items-center">
               <div className="flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                 <span className="text-gray-700 font-medium">Agua/Leche</span>
               </div>
               <span className="font-bold text-lg text-blue-600">{water} ml</span>
             </div>
             <div className="flex justify-between items-center">
               <div className="flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                 <span className="text-gray-700 font-medium">Sal</span>
               </div>
               <span className="font-bold text-gray-800">{salt} g</span>
             </div>
             <div className="flex justify-between items-center">
               <div className="flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                 <span className="text-gray-700 font-medium">Levadura Seca</span>
               </div>
               <span className="font-bold text-gray-800">{yeast} g</span>
             </div>
           </div>

           <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between items-center">
             <span className="text-xs font-bold text-gray-500 uppercase">Peso Total Masa</span>
             <span className="font-black text-xl text-bread-700">{Math.round(totalWeight)} g</span>
           </div>
        </div>
        
        <div className="mt-4 flex gap-2 justify-center">
           <span className="inline-flex items-center gap-1 text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-md border border-blue-100 font-bold">
             Recomendado: Programa 1 o 2
           </span>
        </div>

      </div>
    </div>
  );
};

export default BakersMath;