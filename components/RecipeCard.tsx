import React, { useState, useEffect } from 'react';
import { Recipe } from '../types';
import { Clock, Scale, ChefHat, Globe, ChevronRight, Star, User } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  const isOnline = recipe.source === 'online';
  const isCustom = recipe.source === 'custom';
  
  const [userRating, setUserRating] = useState<number>(0);

  useEffect(() => {
    // Check for user rating in localStorage
    const savedData = localStorage.getItem(`panificadora_user_data_${recipe.id}`);
    if (savedData) {
      const { rating } = JSON.parse(savedData);
      setUserRating(rating || 0);
    }
  }, [recipe.id]);

  return (
    <div 
      onClick={() => onClick(recipe)}
      className="group relative bg-white rounded-2xl shadow-sm border border-bread-100/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full"
    >
      {/* Top Decoration Bar */}
      <div className={`h-2 w-full ${
        isOnline ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 
        isCustom ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
        'bg-gradient-to-r from-bread-400 to-bread-600'
      }`} />

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          {/* Program Badge */}
          <div className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-bread-50 text-bread-800 border border-bread-100 shadow-inner">
            <span className="text-[10px] uppercase font-bold text-bread-400 leading-none mb-0.5">Prog</span>
            <span className="text-xl font-bold leading-none">{recipe.program}</span>
          </div>

          <div className="flex flex-col items-end gap-1">
            {/* Source Badge */}
            {isOnline && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full border border-blue-100">
                <Globe size={12} />
                Web
              </span>
            )}
            
            {isCustom && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full border border-green-100">
                <User size={12} />
                Mía
              </span>
            )}

            {!isOnline && !isCustom && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-bread-50 text-bread-600 text-xs font-bold rounded-full border border-bread-100">
                <ChefHat size={12} />
                Manual
              </span>
            )}
            
            {/* User Rating Badge (if exists) */}
            {userRating > 0 && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-50 text-yellow-600 text-xs font-bold rounded-full border border-yellow-100">
                <Star size={10} className="fill-yellow-500 text-yellow-500" />
                {userRating}
              </span>
            )}
          </div>
        </div>

        {/* Title & Category */}
        <div className="mb-4 flex-grow">
          <span className="text-xs font-bold tracking-wider text-bread-400 uppercase mb-1 block">
            {recipe.category}
          </span>
          <h3 className="text-lg md:text-xl font-serif font-bold text-gray-800 leading-tight group-hover:text-bread-700 transition-colors">
            {recipe.title}
          </h3>
        </div>

        {/* Footer Info */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
          <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-1.5">
              <Clock size={16} className="text-bread-400" />
              <span>{recipe.time}</span>
            </div>
            {recipe.weight && (
               <div className="flex items-center gap-1.5">
                <Scale size={16} className="text-bread-400" />
                <span>{recipe.weight}</span>
              </div>
            )}
          </div>
          
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-bread-600 group-hover:text-white transition-colors">
            <ChevronRight size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;