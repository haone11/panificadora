import React from 'react';
import { Clock, RefreshCw, ArrowUpCircle, Flame, Bell } from 'lucide-react';

interface TimelineProps {
  program: number;
  totalTimeStr: string; // e.g., "3:00 h"
}

// Helper to estimate phases based on program type
// NOTE: These are approximations for the SBB 850 E1 logic to help the user visualize
const getPhases = (prog: number, totalMinutes: number) => {
  // Programs that only bake or mix
  if (prog === 15) return [{ name: 'Horneado', minutes: totalMinutes, color: 'bg-red-500', icon: Flame }];
  if (prog === 9 || prog === 11) return [{ name: 'Amasado', minutes: totalMinutes, color: 'bg-blue-500', icon: RefreshCw }];
  if (prog === 13 || prog === 14) return [{ name: 'Proceso', minutes: totalMinutes, color: 'bg-purple-500', icon: Clock }];
  if (prog === 7) {
     // Express
     return [
      { name: 'Amasar', minutes: 15, color: 'bg-blue-400', icon: RefreshCw },
      { name: 'Levar', minutes: 20, color: 'bg-green-400', icon: ArrowUpCircle },
      { name: 'Hornear', minutes: 40, color: 'bg-red-400', icon: Flame },
     ];
  }
  
  // Standard Bread Cycle (Programs 1, 2, 3, 4, 5, 6)
  // Approximating a 3 hour cycle structure scaled to total time
  // Typical: Knead 1 (5%), Rise 1 (5%), Knead 2 (15% + BEEP), Rise 2/3 (45%), Bake (30%)
  
  const m = totalMinutes;
  
  return [
    { name: 'Amasado 1', minutes: Math.round(m * 0.05), color: 'bg-blue-300', icon: RefreshCw },
    { name: 'Reposo', minutes: Math.round(m * 0.05), color: 'bg-green-200', icon: Clock },
    { name: 'Amasado 2', minutes: Math.round(m * 0.15), color: 'bg-blue-500', icon: RefreshCw, hasBeep: true },
    { name: 'Levado Largo', minutes: Math.round(m * 0.45), color: 'bg-green-500', icon: ArrowUpCircle, isBladeTime: true }, // Aspas removal usually before final rise
    { name: 'Horneado', minutes: Math.round(m * 0.30), color: 'bg-red-500', icon: Flame },
  ];
};

const Timeline: React.FC<TimelineProps> = ({ program, totalTimeStr }) => {
  // Parse "3:00 h" to minutes
  const [hours, minutesPart] = totalTimeStr.replace(' h', '').split(':').map(Number);
  const totalMinutes = (hours * 60) + (minutesPart || 0);

  const phases = getPhases(program, totalMinutes);

  return (
    <div className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100 mt-4">
      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
        <Clock size={12} /> Cronograma Estimado
      </h4>
      
      {/* Visual Bar */}
      <div className="flex w-full h-4 rounded-full overflow-hidden mb-4">
        {phases.map((phase, idx) => (
          <div 
            key={idx} 
            className={`${phase.color} h-full relative group`} 
            style={{ width: `${(phase.minutes / totalMinutes) * 100}%` }}
          >
            {/* Tooltip */}
            <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-10">
              {phase.name} (~{phase.minutes}m)
            </div>
          </div>
        ))}
      </div>

      {/* Phase List */}
      <div className="space-y-3">
        {phases.map((phase, idx) => {
          const Icon = phase.icon;
          return (
            <div key={idx} className="flex items-center text-xs md:text-sm text-gray-600">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${phase.color} mr-3 flex-shrink-0`}>
                <Icon size={12} />
              </div>
              <div className="flex-1 font-medium">{phase.name}</div>
              <div className="flex items-center gap-2">
                 {phase.hasBeep && (
                   <span className="flex items-center gap-1 text-[10px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded border border-yellow-200 font-bold">
                     <Bell size={10} className="fill-yellow-700" /> PITIDO (Ingredientes)
                   </span>
                 )}
                 {phase.isBladeTime && (
                   <span className="flex items-center gap-1 text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded border border-blue-200 font-bold">
                     <RefreshCw size={10} /> QUITAR ASPAS
                   </span>
                 )}
                 <span className="text-gray-400 font-mono">~{phase.minutes}m</span>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-[10px] text-gray-400 mt-3 italic text-center">
        * Tiempos aproximados basados en el ciclo estándar. Escucha siempre los pitidos de tu máquina.
      </p>
    </div>
  );
};

export default Timeline;