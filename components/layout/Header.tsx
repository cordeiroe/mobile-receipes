
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Plus } from "lucide-react-native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface HeaderProps {
  onAddPress?: () => void;
}

export const Header: React.FC<HeaderProps> = React.memo(({ onAddPress }) => {
  const iconColor = Colors.dark.icon;

  const handleAddPress = React.useCallback(() => {
    onAddPress?.();
  }, [onAddPress]);

  return (
    <ThemedView style={styles.header}>
      <ThemedText type="title" accessibilityRole="header">
Receitas
      </ThemedText>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleAddPress}
        accessibilityLabel="Adicionar nova receita"
        accessibilityHint="Toque para criar uma nova receita"
        accessibilityRole="button"
      >
        <Plus size={24} color={iconColor} />
      </TouchableOpacity>
    </ThemedView>
  );
});

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