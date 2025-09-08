import { Header } from "@/components/layout/Header";
import { SearchInput } from "@/components/layout/SearchInput";
import { ThemedView } from "@/components/ThemedView";
import { Recipe, RecipeCard, useRecipes } from "@/features/recipes";
import { useResponsiveLayout } from "@/hooks/useResponsiveLayout";
import React from "react";
import { FlatList, ListRenderItem, SafeAreaView, StyleSheet } from "react-native";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { 
    filteredRecipes, 
    isLoading, 
    error, 
    searchRecipes 
  } = useRecipes();
  
  const { isTablet, isLandscape } = useResponsiveLayout();

  const handleAddRecipe = React.useCallback(() => {
    // TODO: Implementar navegação para tela de adicionar receita
    console.log("Adicionar nova receita");
  }, []);

  const handleRecipePress = React.useCallback((recipe: Recipe) => {
    // TODO: Implementar navegação para detalhes da receita
    console.log("Receita selecionada:", recipe.title);
  }, []);

  const renderRecipeItem: ListRenderItem<Recipe> = React.useCallback(({ item }) => (
    <RecipeCard 
      recipe={item}
      onPress={handleRecipePress}
    />
  ), [handleRecipePress]);

  const keyExtractor = React.useCallback((item: Recipe) => item.id, []);

  const getItemLayout = React.useCallback((data: ArrayLike<Recipe> | null | undefined, index: number) => {
    const baseHeight = isTablet ? 164 : 116; // altura estimada do item + marginBottom
    return {
      length: baseHeight,
      offset: baseHeight * index,
      index,
    };
  }, [isTablet]);

  const containerStyles = React.useMemo(() => [
    styles.listContainer,
    isTablet && styles.listContainerTablet,
    isLandscape && isTablet && styles.listContainerLandscape,
  ], [isTablet, isLandscape]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        <Header onAddPress={handleAddRecipe} />
        <SearchInput 
          onChangeText={searchRecipes}
          placeholder="Pesquisar receitas..."
        />
        <FlatList
          data={filteredRecipes}
          renderItem={renderRecipeItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={containerStyles}
          removeClippedSubviews={true}
          maxToRenderPerBatch={isTablet ? 8 : 10}
          windowSize={isTablet ? 8 : 10}
          getItemLayout={getItemLayout}
          initialNumToRender={isTablet ? 4 : 5}
          updateCellsBatchingPeriod={50}
          showsVerticalScrollIndicator={false}
        />
      </ThemedView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  listContainerTablet: {
    paddingHorizontal: 32,
    paddingBottom: 40,
  },
  listContainerLandscape: {
    paddingHorizontal: 64,
  },
});
