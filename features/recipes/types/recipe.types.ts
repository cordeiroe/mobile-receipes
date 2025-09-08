export interface Recipe {
  id: string;
  image: string;
  title: string;
  category: string;
  rating: number;
  time: string;
  description?: string;
  ingredients?: string[];
  instructions?: string[];
  servings?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface RecipeFilters {
  category?: string;
  rating?: number;
  difficulty?: Recipe['difficulty'];
  maxTime?: number;
}

export interface RecipeSearchParams {
  query: string;
  filters?: RecipeFilters;
}
