import { CreatureCard } from "@/components/bestiary/CreatureCard";
import { RangeFilter } from "@/components/filters/RangeFilter";
import { TextFilter } from "@/components/filters/TextFilter";
import { getCreatures } from "@/services/api";
import { Creature } from "@/types/creature";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, useWindowDimensions, FlatList, ScrollView } from "react-native";

export default function CreaturesScreen() {

  const { width } = useWindowDimensions();
  const numColumns = 4; //width > 1000 ? 4 : width > 700 ? 3 : 2;

  // 🎛 Estado de filtros
  const [tier, setTier] = useState("");
  const [habitat, setHabitat] = useState("");
  const [biome, setBiome] = useState("");
  const [name, setName] = useState("");
  const [hp, setHp] = useState(50);
  const [armor, setArmor] = useState(50);

  const [criaturas, setCriaturas] = useState<Creature[]>([]);

  useEffect(() => {
    fetchCriaturas();
  },[]);

  async function fetchCriaturas() {
    try{
      const disponibles = await getCreatures();
      setCriaturas(disponibles);
      console.log(disponibles);
    } catch (err) {
      console.log(err);
    }
  }

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
            <ScrollView>
              <FlatList
                key={"Bestiario"}
                data={criaturas}
                horizontal
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={styles.cardsContainer}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CreatureCard creature={item} />}
                />
            </ScrollView>
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
    paddingHorizontal: 50,
    marginBottom: 24,
  },
  rangeFiltersRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 32,
  },
  cardsContainer: {
    paddingHorizontal: 20,
  },
});