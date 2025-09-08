import React from 'react';
import { Recipe, RecipeFilters } from '../types/recipe.types';

// Mock data para demonstração
const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    image: "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-cA_2tY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-ddmfs-4x3-1350-1-6a03c182a52446268d5669813c544369.jpg",
    title: "Chocolate Cake",
    category: "Cake",
    rating: 5,
    time: "1 hr",
    description: "Delicious chocolate cake with rich frosting",
    difficulty: 'medium',
    servings: 8,
  },
  {
    id: '2',
    image: "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-cA_2tY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-ddmfs-4x3-1350-1-6a03c182a52446268d5669813c544369.jpg",
    title: "Margherita Pizza",
    category: "Savory",
    rating: 4,
    time: "20 min",
    description: "Classic Italian pizza with fresh basil and mozzarella",
    difficulty: 'easy',
    servings: 4,
  },
  {
    id: '3',
    image: "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-cA_2tY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-ddmfs-4x3-1350-1-6a03c182a52446268d5669813c544369.jpg",
    title: "Chicken Curry",
    category: "Chicken",
    rating: 5,
    time: "45 min",
    description: "Spicy and flavorful chicken curry with coconut milk",
    difficulty: 'medium',
    servings: 6,
  },
];

interface UseRecipesReturn {
  recipes: Recipe[];
  isLoading: boolean;
  error: string | null;
  filteredRecipes: Recipe[];
  searchRecipes: (query: string) => void;
  filterRecipes: (filters: RecipeFilters) => void;
  clearFilters: () => void;
}

export const useRecipes = (): UseRecipesReturn => {
  const [recipes] = React.useState<Recipe[]>(MOCK_RECIPES);
  const [isLoading] = React.useState<boolean>(false);
  const [error] = React.useState<string | null>(null);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [filters, setFilters] = React.useState<RecipeFilters>({});

  const filteredRecipes = React.useMemo(() => {
    let result = recipes;

    // Aplicar filtro de busca
    if (searchQuery.trim()) {
      result = result.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Aplicar filtros
    if (filters.category) {
      result = result.filter(recipe => recipe.category === filters.category);
    }

    if (filters.rating) {
      result = result.filter(recipe => recipe.rating >= filters.rating!);
    }

    if (filters.difficulty) {
      result = result.filter(recipe => recipe.difficulty === filters.difficulty);
    }

    if (filters.maxTime) {
      result = result.filter(recipe => {
        const timeInMinutes = parseInt(recipe.time.replace(/\D/g, ''));
        return timeInMinutes <= filters.maxTime!;
      });
    }

    return result;
  }, [recipes, searchQuery, filters]);

  const searchRecipes = React.useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const filterRecipes = React.useCallback((newFilters: RecipeFilters) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  }, []);

  const clearFilters = React.useCallback(() => {
    setFilters({});
    setSearchQuery('');
  }, []);

  return {
    recipes,
    isLoading,
    error,
    filteredRecipes,
    searchRecipes,
    filterRecipes,
    clearFilters,
  };
};
