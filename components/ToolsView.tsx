import React from 'react';
import RecipeCreator from './RecipeCreator';
import BakersMath from './BakersMath';
import { Recipe } from '../types';

interface ToolsViewProps {
  onRecipeCreated: (recipe: Recipe) => void;
}

const ToolsView: React.FC<ToolsViewProps> = ({ onRecipeCreated }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-3">
          Caja de Herramientas
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Utilidades avanzadas. Crea tus propias recetas o calcula proporciones exactas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-8">
           <RecipeCreator onSave={onRecipeCreated} />
        </div>
        <BakersMath />
      </div>
    </div>
  );
};

export default ToolsView;