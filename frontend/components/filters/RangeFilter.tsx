// components/filters/RangeFilter.tsx
//import Slider from "@react-native-community/slider";
import { useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from 'rn-range-slider';

type Props = {
  label: string;
  min: number;
  max: number;
  minorValue: number;
  higherValue: number;
  onChange: (minorValue: number,higherValue: number) => void;
};

// 1. El "botón" que arrastras
const Thumb = () => {
  return <View style={styles.thumb} />;
};

// 2. La barra de fondo (gris o clarita)
const Rail = () => {
  return <View style={styles.rail} />;
};

// 3. La barra que indica la selección (color activo)
const RailSelected = () => {
  return <View style={styles.railSelected} />;
};

export function RangeFilter({ label, min, max, minorValue, higherValue,onChange }: Props) {

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label} max: {higherValue}
      </Text>
      <Text style={styles.label}>
        {label} min: {minorValue}
      </Text>
      <Slider
        min={min}
        max={max}
        minRange={1}
        step={1}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderThumb={renderThumb}
        onValueChanged={onChange}
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

  thumb: {
    width: 20,
    height: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E2A062', // Un color púrpura moderno
    backgroundColor: '#E2A062',
    elevation: 3, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  rail: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#e1e1e1',
  },
  railSelected: {
    height: 4,
    backgroundColor: '#B7995F',
    borderRadius: 2,
  }
});
