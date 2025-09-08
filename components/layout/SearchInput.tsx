import { Colors } from "@/constants/Colors";
import { Search } from "lucide-react-native";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { ThemedView } from "../ThemedView";

interface SearchInputProps {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = React.memo(({ 
  value, 
  onChangeText, 
  placeholder = "Pesquisar receitas..." 
}) => {
  const theme = Colors.dark;

  const handleChangeText = React.useCallback((text: string) => {
    onChangeText?.(text);
  }, [onChangeText]);

  return (
    <ThemedView style={styles.container}>
      <View style={styles.searchSection}>
        <Search size={20} color={theme.icon} />
        <TextInput
          style={[styles.input, { color: theme.text }]}
          placeholder={placeholder}
          placeholderTextColor={theme.icon}
          value={value}
          onChangeText={handleChangeText}
          accessibilityLabel="Campo de pesquisa"
          accessibilityHint="Digite para pesquisar receitas"
          returnKeyType="search"
        />
      </View>
    </ThemedView>
  );
});

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