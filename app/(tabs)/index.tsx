import { Header } from "@/components/layout/Header";
import { SearchInput } from "@/components/layout/SearchInput";
import {
    RecipeCard,
    RecipeCardProps,
} from "@/components/RecipeCard";
import { ThemedView } from "@/components/ThemedView";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";

const recipes: RecipeCardProps[] = [
  {
    image: "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-cA_2tY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-ddmfs-4x3-1350-1-6a03c182a52446268d5669813c544369.jpg",
    title: "Chocolate Cake",
    category: "Cake",
    rating: 5,
    time: "1 hr",
  },
  {
    image: "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-cA_2tY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-ddmfs-4x3-1350-1-6a03c182a52446268d5669813c544369.jpg",
    title: "Margherita Pizza",
    category: "Savory",
    rating: 4,
    time: "20 min",
  },
  {
    image: "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-cA_2tY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-ddmfs-4x3-1350-1-6a03c182a52446268d5669813c544369.jpg",
    title: "Chicken Curry",
    category: "Chicken",
    rating: 5,
    time: "45 min",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        <Header />
        <SearchInput />
        <FlatList
          data={recipes}
          renderItem={({ item }) => <RecipeCard {...item} />}
          keyExtractor={(item) => item.title}
          contentContainerStyle={styles.listContainer}
        />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
});
