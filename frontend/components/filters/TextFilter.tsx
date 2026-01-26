// components/filters/TextFilter.tsx
import { TextInput, StyleSheet } from "react-native";

type Props = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export function TextFilter({ value, placeholder, onChange }: Props) {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      placeholderTextColor="#bbaaaa"
      onChangeText={onChange}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#4a221a",
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 20,
    color: "#fff",
    minWidth: 120,
    marginHorizontal: 20,
  },
});
