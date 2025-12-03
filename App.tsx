import React, { useState, useMemo, useEffect } from 'react';
import { recipes as staticRecipes } from './data/recipes';
import RecipeCard from './components/RecipeCard';
import RecipeDetail from './components/RecipeDetail';
import HacksView from './components/HacksView';
import ToolsView from './components/ToolsView';
import InstructionsView from './components/InstructionsView';
import { Recipe, RecipeCategory } from './types';
import { Search, ChefHat, UtensilsCrossed, BookOpen, Lightbulb, Wrench, User, Book, Share2, Check } from 'lucide-react';

type ViewMode = 'recipes' | 'hacks' | 'tools' | 'instructions';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('Todas');
  const [viewMode, setViewMode] = useState<ViewMode>('recipes');
  const [isCopied, setIsCopied] = useState(false);
  
  // Custom Recipes State
  const [customRecipes, setCustomRecipes] = useState<Recipe[]>([]);

  // Load custom recipes on mount
  useEffect(() => {
    const saved = localStorage.getItem('panificadora_custom_recipes');
    if (saved) {
      try {
        setCustomRecipes(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading custom recipes", e);
      }
    }
  }, []);

  const handleCreateRecipe = (newRecipe: Recipe) => {
    const updated = [newRecipe, ...customRecipes];
    setCustomRecipes(updated);
    localStorage.setItem('panificadora_custom_recipes', JSON.stringify(updated));
    // Switch to recipes view to see it
    setSearchTerm(''); // Clear search to ensure it's visible if not filtered
    setActiveCategory('Todas');
    setViewMode('recipes');
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Panificadora Pro',
      text: 'Recetas, trucos y guía para la Silvercrest SBB 850 E1',
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  // Combine static and custom recipes
  const allRecipes = useMemo(() => {
    return [...customRecipes, ...staticRecipes];
  }, [customRecipes]);

  // Filter Logic with Accent Insensitivity
  const filteredRecipes = useMemo(() => {
    const normalize = (str: string) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const term = normalize(searchTerm);

    return allRecipes.filter(recipe => {
      const matchesSearch = normalize(recipe.title).includes(term);
      const matchesCategory = activeCategory === 'Todas' || recipe.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory, allRecipes]);

  const categories = ['Todas', ...Object.values(RecipeCategory)];

  // View: Recipe Detail
  if (selectedRecipe) {
    return (
      <>
        <RecipeDetail 
          recipe={selectedRecipe} 
          onBack={() => setSelectedRecipe(null)} 
        />
      </>
    );
  }

  // View: Main App (List or Hacks)
  return (
    <div className="min-h-screen bg-gray-50/80 pb-20 font-sans">
      
      {/* Modern Glass Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-bread-600 to-bread-800 p-2.5 rounded-xl text-white shadow-lg shadow-bread-600/20">
                <ChefHat size={26} strokeWidth={1.5} />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-serif font-bold text-gray-900 tracking-tight leading-none">
                  Panificadora<span className="text-bread-600">Pro</span>
                </h1>
                <p className="text-xs text-bread-800 font-bold tracking-wide uppercase mt-0.5 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Optimizado SBB 850 E1
                </p>
              </div>
            </div>

            <button 
              onClick={handleShare}
              className={`
                flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-bold transition-all duration-300
                ${isCopied 
                  ? 'bg-green-100 text-green-700 shadow-inner' 
                  : 'bg-white text-bread-700 hover:bg-bread-50 shadow-sm border border-gray-200 hover:border-bread-200'
                }
              `}
            >
              {isCopied ? <Check size={18} /> : <Share2 size={18} />}
              <span className="hidden sm:inline">
                {isCopied ? 'Enlace Copiado' : 'Compartir'}
              </span>
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-2 mb-4 bg-gray-100 p-1 rounded-xl w-full md:w-auto self-start overflow-x-auto no-scrollbar">
            <button
              onClick={() => setViewMode('recipes')}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 md:px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                viewMode === 'recipes' 
                  ? 'bg-white text-bread-800 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <BookOpen size={16} />
              Recetas
            </button>
            <button
              onClick={() => setViewMode('hacks')}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 md:px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                viewMode === 'hacks' 
                  ? 'bg-white text-indigo-700 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Lightbulb size={16} />
              Trucos
            </button>
            <button
              onClick={() => setViewMode('tools')}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 md:px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                viewMode === 'tools' 
                  ? 'bg-white text-rose-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Wrench size={16} />
              Herramientas
            </button>
            <button
              onClick={() => setViewMode('instructions')}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 md:px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                viewMode === 'instructions' 
                  ? 'bg-white text-cyan-700 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Book size={16} />
              Guía
            </button>
          </div>

          {/* Search & Filter Container (Only visible in Recipes Mode) */}
          {viewMode === 'recipes' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
               {/* Search Bar */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400 group-focus-within:text-bread-500 transition-colors" />
                </div>
                <input 
                  type="text" 
                  placeholder="¿Qué quieres hornear hoy?..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-4 py-3 bg-gray-100/50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bread-500/20 focus:border-bread-500 focus:bg-white transition-all shadow-inner"
                />
              </div>

              {/* Category Chips */}
              <div className="-mx-4 px-4 overflow-x-auto no-scrollbar pb-1">
                <div className="flex gap-2 min-w-max">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        activeCategory === cat 
                          ? 'bg-bread-800 text-white shadow-md shadow-bread-900/10 scale-105' 
                          : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      {viewMode === 'recipes' && (
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-2xl font-serif font-bold text-gray-800">
              {activeCategory === 'Todas' ? 'Explorar Recetas' : activeCategory}
            </h2>
            <span className="text-sm font-medium px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-500">
              {filteredRecipes.length} resultados
            </span>
          </div>
          
          {/* Custom Recipe Banner if any */}
          {customRecipes.length > 0 && activeCategory === 'Todas' && !searchTerm && (
            <div className="mb-6 p-4 bg-bread-50 border border-bread-200 rounded-2xl flex items-center gap-3">
              <div className="bg-bread-100 p-2 rounded-full text-bread-700">
                <User size={20} />
              </div>
              <div>
                <p className="text-bread-900 font-bold text-sm">Tienes {customRecipes.length} recetas propias</p>
                <p className="text-bread-700 text-xs">Aparecen primero en la lista.</p>
              </div>
            </div>
          )}

          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {filteredRecipes.map(recipe => (
                <RecipeCard 
                  key={recipe.id} 
                  recipe={recipe} 
                  onClick={setSelectedRecipe} 
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="bg-gray-100 p-6 rounded-full mb-4">
                <UtensilsCrossed size={48} className="text-gray-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-700 mb-1">No se encontraron recetas</h3>
              <p className="text-gray-500 mb-6">Prueba a buscar con otro término o categoría.</p>
              <button 
                onClick={() => {setSearchTerm(''); setActiveCategory('Todas');}}
                className="text-bread-600 font-bold hover:text-bread-800 hover:underline transition-colors"
              >
                Ver todas las recetas
              </button>
            </div>
          )}
        </main>
      )}

      {viewMode === 'hacks' && <HacksView />}
      
      {viewMode === 'tools' && <ToolsView onRecipeCreated={handleCreateRecipe} />}
      
      {viewMode === 'instructions' && <InstructionsView />}
    </div>
  );
}

export default App;