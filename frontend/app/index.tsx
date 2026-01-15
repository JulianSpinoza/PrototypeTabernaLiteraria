import { CreatureCard } from "@/components/bestiary/CreatureCard";
import { RangeFilter } from "@/components/filters/RangeFilter";
import { TextFilter } from "@/components/filters/TextFilter";
import { useState } from "react";
import { View, StyleSheet, Text, useWindowDimensions, FlatList } from "react-native";

export default function CreaturesScreen() {

  const CREATURES = [
    {
      id: "1",
      name: "Goblin de Arbusto",
      tier: "Bajo",
      habitat: "Bosque",
      biome: "Templado",
      hp: 12,
      armor: 8,
      image: "https://placehold.co/300x400",
    },
    {
      id: "2",
      name: "Elemental de Fuego",
      tier: "Alto",
      habitat: "Volcán",
      biome: "Ígneo",
      hp: 40,
      armor: 20,
      image: "https://placehold.co/300x400",
    },
  ];

  const { width } = useWindowDimensions();
  const numColumns = width > 1000 ? 4 : width > 700 ? 3 : 2;

  // 🎛 Estado de filtros
  const [tier, setTier] = useState("");
  const [habitat, setHabitat] = useState("");
  const [biome, setBiome] = useState("");
  const [name, setName] = useState("");
  const [hp, setHp] = useState(50);
  const [armor, setArmor] = useState(50);


  return (
      <View style={styles.container}>
          <Text style={styles.title}>Criaturas</Text>
            {/* 🔤 Filtros de texto */}
            <View style={styles.textFiltersRow}>
              <TextFilter placeholder="Bioma" value={biome} onChange={setBiome} />
              <TextFilter placeholder="Tier" value={tier} onChange={setTier} />
              <TextFilter placeholder="Habitat" value={habitat} onChange={setHabitat} />
            </View>

            <View style={styles.nameFilter}>
              <TextFilter placeholder="Nombre" value={name} onChange={setName} />
            </View>

            {/* 🎚 Filtros numéricos */}
            <View style={styles.rangeFiltersRow}>
              <RangeFilter
                label="Puntos de salud"
                min={0}
                max={50}
                value={hp}
                onChange={setHp}
              />

              <RangeFilter
                label="Puntos de armadura"
                min={0}
                max={50}
                value={armor}
                onChange={setArmor}
              />
            </View>

            {/* 🃏 Grid de cartas */}
            
      </View>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a0d0a",
    paddingTop: 40,
  },
  title: {
    fontSize: 36,
    color: "#fff",
    textAlign: "center",
    marginBottom: 24,
  },
  textFiltersRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 16,
  },
  nameFilter: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  rangeFiltersRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 32,
  },
  cardsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
});