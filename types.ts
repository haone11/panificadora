export enum RecipeCategory {
  CLASSIC = 'Clásico',
  WHOLE_WHEAT = 'Integral',
  SWEET = 'Dulce',
  DOUGH = 'Masas',
  JAM = 'Mermeladas',
  GLUTEN_FREE = 'Sin Gluten',
  LOW_CARB = 'Low Carb',
  EXPRESS = 'Exprés',
  CAKE = 'Bizcochos',
  YOGURT = 'Yogur',
  CHRISTMAS = 'Navidad'
  // ONLINE category removed, merged into others or specific categories like Christmas
}

export interface Ingredient {
  name: string;
  amount: string;
}

export type RecipeSource = 'manual' | 'online' | 'custom';

export interface Recipe {
  id: string;
  title: string;
  category: RecipeCategory;
  source: RecipeSource; // New field to distinguish source
  program: number; // The Silvercrest program number (e.g., 1, 3, 7)
  programName: string;
  time: string; // e.g. "3:00 h"
  browning?: 'Claro' | 'Medio' | 'Oscuro';
  weight?: '1000g' | '1250g' | '1500g'; // Updated to match user's machine (1000, 1250, 1500)
  ingredients: Ingredient[];
  steps: string[];
  tips?: string;
  imageId: string; // Unsplash Photo ID
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}