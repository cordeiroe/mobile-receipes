
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Plus } from "lucide-react-native";
import { StyleSheet, TouchableOpacity } from "react-native";

export function Header() {
  const iconColor = Colors.dark.icon;

  return (
    <ThemedView style={styles.header}>
      <ThemedText type="title">Recipes</ThemedText>
      <TouchableOpacity style={styles.button}>
        {/* @ts-ignore */}
        <Plus size={24} color={iconColor} />
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  button: {
    padding: 8,
    borderRadius: 8,
  },
}); 