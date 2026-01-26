// components/filters/RangeFilter.tsx
import Slider from "@react-native-community/slider";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
};

export function RangeFilter({ label, min, max, value, onChange }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}: {value}
      </Text>
      <Slider
        minimumValue={min}
        maximumValue={max}
        value={value}
        step={1}
        onValueChange={onChange}
        minimumTrackTintColor="#e36a5c"
        maximumTrackTintColor="#5a2b24"
        thumbTintColor="#e36a5c"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    width: 300,
    marginHorizontal: 20,
  },
  label: {
    color: "#cbb", textAlign: "center", marginBottom: 4 
  },
});
