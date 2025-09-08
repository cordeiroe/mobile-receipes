import { Colors } from "@/constants/Colors";
import { Search } from "lucide-react-native";
import { StyleSheet, TextInput, View } from "react-native";
import { ThemedView } from "../ThemedView";

export function SearchInput() {
  const theme = Colors.dark;

  return (
    <ThemedView style={styles.container}>
      <View style={styles.searchSection}>
        {/* @ts-ignore */}
        <Search size={20} color={theme.icon} />
        <TextInput
          style={[styles.input, { color: theme.text }]}
          placeholder="Cakes"
          placeholderTextColor={theme.icon}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E4E58",
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
}); 