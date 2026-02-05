// components/filters/TextFilter.tsx
import { TextInput, StyleSheet } from "react-native";

export interface TextFilterProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export function TextFilter({ value, placeholder, onChange }: TextFilterProps) {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      placeholderTextColor="#bbaaaa"
      onChangeText={onChange}
      style={styles.input}
      underlineColorAndroid="transparent"
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
    minWidth: 150,
    marginHorizontal: 20,
    outlineWidth: 0,
  },
});
