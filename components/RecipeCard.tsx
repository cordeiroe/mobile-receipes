import { Colors } from "@/constants/Colors";
import { Star } from "lucide-react-native";
import { Image, StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export type RecipeCardProps = {
  image: string;
  title: string;
  category: string;
  rating: number;
  time: string;
};

export function RecipeCard({
  image,
  title,
  category,
  rating,
  time,
}: RecipeCardProps) {
  const theme = Colors.dark;

  return (
    <ThemedView style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <ThemedText type="subtitle">{title}</ThemedText>
        <ThemedText type="defaultSemiBold">{category}</ThemedText>
        <View style={styles.detailsContainer}>
          <View style={styles.ratingContainer}>
            {[...Array(5)].map((_, i) => (
              // @ts-ignore
              <Star
                key={i}
                size={16}
                color={i < rating ? theme.tint : theme.icon}
                fill={i < rating ? theme.tint : "transparent"}
              />
            ))}
          </View>
          <ThemedText type="defaultSemiBold">{time}</ThemedText>
        </View>
      </View>
    </ThemedView>
  );
}

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
  image: {
    width: 100,
    height: 100,
    borderRadius: 16,
  },
  infoContainer: {
    flex: 1,
    padding: 12,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: "row",
  },
}); 