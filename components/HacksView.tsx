import React from 'react';
import { hacks } from '../data/hacks';

const HacksView: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-3">
          Secretos de la SBB 850 E1
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Recopilación de trucos de la comunidad, foros y expertos para sacar el máximo partido a tu máquina y evitar errores comunes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hacks.map((hack) => {
          const Icon = hack.icon;
          return (
            <div key={hack.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl flex-shrink-0 ${hack.color}`}>
                  <Icon size={24} />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-gray-800 leading-tight">
                      {hack.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 border border-gray-100 px-2 py-0.5 rounded-full">
                      {hack.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {hack.content}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-indigo-50 rounded-2xl p-6 border border-indigo-100 text-center">
        <p className="text-indigo-800 font-medium">
          ¿Tienes un truco que no está aquí? Cuéntaselo al asistente IA y él aprenderá para futuras actualizaciones.
        </p>
      </div>
    </div>
  );
};

export default HacksView;