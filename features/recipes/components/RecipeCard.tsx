import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useResponsiveLayout } from "@/hooks/useResponsiveLayout";
import { Star } from "lucide-react-native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Recipe } from "../types/recipe.types";

export interface RecipeCardProps {
  recipe: Recipe;
  onPress?: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = React.memo(({
  recipe,
  onPress,
}) => {
  const theme = Colors.dark;
  const { isTablet, isLandscape } = useResponsiveLayout();

  const handlePress = React.useCallback(() => {
    onPress?.(recipe);
  }, [onPress, recipe]);

  const renderStars = React.useMemo(() => {
    const starSize = isTablet ? 20 : 16;
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={starSize}
        color={i < recipe.rating ? theme.tint : theme.icon}
        fill={i < recipe.rating ? theme.tint : "transparent"}
      />
    ));
  }, [recipe.rating, theme.tint, theme.icon, isTablet]);

  const cardStyles = React.useMemo(() => [
    styles.card,
    isTablet && styles.cardTablet,
    isLandscape && isTablet && styles.cardLandscape,
  ], [isTablet, isLandscape]);

  const imageStyles = React.useMemo(() => [
    styles.image,
    isTablet && styles.imageTablet,
  ], [isTablet]);

  return (
    <TouchableOpacity 
      onPress={handlePress}
      accessibilityRole="button"
      accessibilityLabel={`Receita: ${recipe.title}, Categoria: ${recipe.category}, Avaliação: ${recipe.rating} de 5 estrelas, Tempo: ${recipe.time}`}
      activeOpacity={0.7}
    >
      <ThemedView style={cardStyles}>
        <Image 
          source={{ uri: recipe.image }} 
          style={imageStyles}
          accessibilityLabel={`Imagem da receita ${recipe.title}`}
        />
        <View style={styles.infoContainer}>
          <ThemedText 
            type="subtitle" 
            style={isTablet && styles.titleTablet}
          >
            {recipe.title}
          </ThemedText>
          <ThemedText 
            type="defaultSemiBold" 
            style={[styles.category, isTablet && styles.categoryTablet]}
          >
            {recipe.category}
          </ThemedText>
          <View style={styles.detailsContainer}>
            <View style={styles.ratingContainer} accessibilityLabel={`Avaliação: ${recipe.rating} de 5 estrelas`}>
              {renderStars}
            </View>
            <ThemedText 
              type="defaultSemiBold" 
              style={[styles.time, isTablet && styles.timeTablet]}
            >
              {recipe.time}
            </ThemedText>
          </View>
        </View>
      </ThemedView>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    alignItems: "center",
  },
  cardTablet: {
    borderRadius: 24,
    marginBottom: 24,
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardLandscape: {
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 16,
  },
  imageTablet: {
    width: 140,
    height: 140,
    borderRadius: 20,
  },
  infoContainer: {
    flex: 1,
    padding: 12,
  },
  titleTablet: {
    fontSize: 20,
    fontWeight: '600',
  },
  category: {
    marginTop: 4,
    opacity: 0.8,
  },
  categoryTablet: {
    fontSize: 16,
    marginTop: 6,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    gap: 2,
  },
  time: {
    opacity: 0.7,
  },
  timeTablet: {
    fontSize: 16,
  },
}); 