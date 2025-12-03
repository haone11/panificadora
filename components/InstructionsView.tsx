import React from 'react';
import { Book, Clock, AlertTriangle, Thermometer, Play, Cog, ChefHat } from 'lucide-react';

const programs = [
  {
    num: 1,
    name: 'Normal',
    desc: 'El programa estándar. Para panes blancos o mixtos de trigo y centeno. Amasa, leva y hornea.',
    icon: ChefHat,
    color: 'bg-blue-100 text-blue-700'
  },
  {
    num: 2,
    name: 'Esponjoso',
    desc: 'Para pan ligero tipo francés. Tiempos de amasado y levado más largos para una miga más aireada y corteza crujiente.',
    icon: ChefHat,
    color: 'bg-indigo-100 text-indigo-700'
  },
  {
    num: 3,
    name: 'Integral',
    desc: 'Para panes con mucha harina integral. Precalienta los ingredientes antes de amasar y leva más tiempo.',
    icon: ChefHat,
    color: 'bg-amber-100 text-amber-800'
  },
  {
    num: 4,
    name: 'Dulce',
    desc: 'Para panes con azúcar, pasas, chocolate o jugos de frutas. Temperatura de horneado ajustada para no quemar el azúcar.',
    icon: ChefHat,
    color: 'bg-pink-100 text-pink-700'
  },
  {
    num: 5,
    name: 'Low Carb',
    desc: 'Específico para harinas bajas en carbohidratos (almendra, coco) que no necesitan tanto levado como el trigo.',
    icon: ChefHat,
    color: 'bg-green-100 text-green-700'
  },
  {
    num: 6,
    name: 'Sin Gluten',
    desc: 'Vital para celiacos. Las masas sin gluten no necesitan tanto amasado pero sí un levado específico.',
    icon: ChefHat,
    color: 'bg-teal-100 text-teal-700'
  },
  {
    num: 7,
    name: 'Exprés',
    desc: 'Amasado y horneado muy rápido. Requiere agua caliente y más levadura. El pan sale más compacto.',
    icon: Clock,
    color: 'bg-orange-100 text-orange-700'
  },
  {
    num: 8,
    name: 'Pastel',
    desc: 'Para bizcochos con levadura química (tipo Royal). Amasa poco y hornea inmediatamente.',
    icon: ChefHat,
    color: 'bg-purple-100 text-purple-700'
  },
  {
    num: 9,
    name: 'Amasar',
    desc: 'SOLO AMASA. No leva ni hornea. Para masas de galletas, empanadas o churros.',
    icon: Cog,
    color: 'bg-gray-100 text-gray-700'
  },
  {
    num: 10,
    name: 'Masa',
    desc: 'Amasa y hace el levado. NO HORNEA. Para masa de pizza, panecillos, donuts o roscón que hornearás en horno normal.',
    icon: Cog,
    color: 'bg-yellow-100 text-yellow-700'
  },
  {
    num: 11,
    name: 'Masa Pasta',
    desc: 'Amasado corto e intenso para pasta fresca (tallarines, lasaña). No lleva levadura.',
    icon: Cog,
    color: 'bg-red-100 text-red-700'
  },
  {
    num: 12,
    name: 'Pizza',
    desc: 'Programa específico para masa de pizza. Tiempos optimizados para que quede elástica.',
    icon: Cog,
    color: 'bg-orange-50 text-orange-800'
  },
  {
    num: 13,
    name: 'Yogur',
    desc: 'Mantiene temperatura constante baja (37-45°C) durante 8 horas para fermentar leche.',
    icon: Thermometer,
    color: 'bg-cyan-100 text-cyan-700'
  },
  {
    num: 14,
    name: 'Mermelada',
    desc: 'Calienta y remueve constantemente. Ideal para confituras, arroz con leche o bechamel.',
    icon: Thermometer,
    color: 'bg-rose-100 text-rose-700'
  },
  {
    num: 15,
    name: 'Hornear',
    desc: 'SOLO HORNEA. Sin amasado. Útil si el pan ha quedado crudo o para hornear masas preparadas fuera.',
    icon: Thermometer,
    color: 'bg-stone-100 text-stone-700'
  },
  {
    num: 16,
    name: 'Casero',
    desc: 'Programable 100%. Permite definir los tiempos de cada fase (amasado 1, levado 1, etc.) a tu gusto.',
    icon: Cog,
    color: 'bg-slate-200 text-slate-800'
  },
];

const errorCodes = [
  { code: 'H:HH', meaning: 'Máquina demasiado caliente', solution: 'Desenchufa, abre la tapa y deja enfriar 20 min antes de volver a usar.' },
  { code: 'E:E0', meaning: 'Error sensor temperatura', solution: 'Fallo técnico. Contacta servicio técnico (Kompernass).' },
  { code: 'L:LL', meaning: 'Máquina demasiado fría', solution: 'El ambiente es gélido. Abre la tapa y deja que se temple a temperatura ambiente.' },
];

const InstructionsView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-3 flex items-center justify-center gap-3">
          <Book className="text-bread-600" /> Manual Rápido
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Referencia de todos los programas de la Silvercrest SBB 850 E1 y solución de problemas comunes.
        </p>
      </div>

      {/* Programs Grid */}
      <h3 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2">
        Los 16 Programas
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {programs.map((prog) => {
          const Icon = prog.icon;
          return (
            <div key={prog.num} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 hover:border-bread-300 transition-colors">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-lg ${prog.color}`}>
                {prog.num}
              </div>
              <div>
                <h4 className="font-bold text-gray-800 flex items-center gap-2">
                  {prog.name}
                  {prog.num === 16 && <span className="text-[10px] bg-gray-200 px-1.5 py-0.5 rounded text-gray-600">PRO</span>}
                </h4>
                <p className="text-sm text-gray-600 mt-1 leading-snug">
                  {prog.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Basic Usage Tips */}
      <div className="bg-bread-50 rounded-2xl p-6 border border-bread-200 mb-12">
        <h3 className="text-xl font-bold text-bread-900 mb-4 flex items-center gap-2">
          <Play size={20} /> Uso Básico de Botones
        </h3>
        <ul className="space-y-3 text-sm md:text-base text-bread-800">
          <li className="flex items-start gap-2">
            <span className="font-bold bg-white px-2 rounded border border-bread-200 text-xs py-0.5 mt-0.5">START/STOP</span>
            <span>Para iniciar, pulsa brevemente. Para parar o cancelar, <strong>mantén pulsado 3 segundos</strong> hasta el pitido largo.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold bg-white px-2 rounded border border-bread-200 text-xs py-0.5 mt-0.5">MENU</span>
            <span>Pulsa repetidamente para ciclar entre los programas del 1 al 16.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold bg-white px-2 rounded border border-bread-200 text-xs py-0.5 mt-0.5">PESO</span>
            <span>Alterna entre 1000g, 1250g y 1500g. Afecta al tiempo de horneado.</span>
          </li>
          <li className="flex items-start gap-2">
             <span className="font-bold bg-white px-2 rounded border border-bread-200 text-xs py-0.5 mt-0.5">TOSTADO</span>
             <span>Alterna entre Claro, Medio y Oscuro.</span>
          </li>
        </ul>
      </div>

      {/* Error Codes */}
      <div className="mb-20">
        <h3 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2 flex items-center gap-2">
          <AlertTriangle className="text-red-500" /> Códigos de Error
        </h3>
        <div className="space-y-4">
          {errorCodes.map((err, idx) => (
            <div key={idx} className="bg-red-50 p-4 rounded-xl border border-red-100 flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="bg-white text-red-600 font-mono font-bold text-xl px-4 py-2 rounded border border-red-200 shadow-sm whitespace-nowrap">
                {err.code}
              </div>
              <div>
                <h4 className="font-bold text-red-900">{err.meaning}</h4>
                <p className="text-red-800/80 text-sm mt-1">{err.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default InstructionsView;