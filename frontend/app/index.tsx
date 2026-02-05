import { CreatureCard } from "@/components/bestiary/CreatureCard";
import { RangeFilter } from "@/components/filters/RangeFilter";
import { SelectionFilter } from "@/components/filters/SelectionFilter";
import { TextFilter } from "@/components/filters/TextFilter";
import { CartDimensions } from "@/constants/carts";
import { useCreatures } from "@/hooks/useCreatures";
import { getCreatures } from "@/services/api_endpoints";
import { Creature } from "@/types/creature";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, useWindowDimensions, FlatList, ScrollView, Pressable } from "react-native";

export default function CreaturesScreen() {

  const { width } = useWindowDimensions();
  // Convert this const in a function
  const numColumns = width > CartDimensions.width*5 ? 5 : width > CartDimensions.width*4 ? 4 : width > CartDimensions.width*3 ? 3 : width > CartDimensions.width*2 ? 2 : 1;

  // 🎛 Estado de filtros
  const [tier, setTier] = useState("");
  const [habitat, setHabitat] = useState("");
  const [biome, setBiome] = useState("");
  const [name, setName] = useState("");
  const [hp, setHp] = useState(50);
  const [armor, setArmor] = useState(50);

  const {
    loading,
    error,
    creatures,
    fetchCreatures,
  } = useCreatures<Creature[]>()

  useEffect(() => {
    fetchCreatures({});
  },[]);

  const filterCreatures = () => {
    fetchCreatures({
      name: name,
      biome: biome,
      habitat: habitat,
    })
  }

  const options = [
    {
      name: "Opcion 1",
      image: require("@/assets/images/Metallurgia_Bioma.png")
    },
    {
      name: "Opcion 2",
      image: require("@/assets/images/Metallurgia_Bioma.png")
    },
    {
      name: "Opcion 3",
      image: require("@/assets/images/Metallurgia_Bioma.png")
    },
    {
      name: "Opcion 4"
    },
    {
      name: "Opcion 5"
    },
    {
      name: "Opcion 6"
    }
  ];

  return (
      <View style={styles.container}>
          <Text style={styles.title}>Criaturas</Text>   

            {/* 🔤 Filtros de texto */}
            <View style={styles.textFiltersRow}>
              <SelectionFilter placeholder="Bioma" value={biome} onChange={setBiome} listOfOptions={options} />
              <SelectionFilter placeholder="Tier" value={tier} onChange={setTier} listOfOptions={options} />
              <SelectionFilter placeholder="Habitat" value={habitat} onChange={setHabitat} listOfOptions={options} />
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

               <Pressable style={styles.circle} onPress={filterCreatures}></Pressable>

              <RangeFilter
                label="Puntos de armadura"
                min={0}
                max={50}
                value={armor}
                onChange={setArmor}
              />
            </View>


            {/* Loading */}
            {loading && (
              <Text>Loading...</Text> 
            )}

            {/* Error */}
            {error && (
              <Text>{error}</Text> 
            )}

            {/* Empty Space */}
            {//!loading && !error && creatures. (
              //<Text>{error}</Text> 
            //)
            }

            {/* Carts */}
            {!loading && !error && (
              <ScrollView>
                <FlatList
                  key={numColumns}
                  data={creatures}
                  //horizontal
                  numColumns={numColumns}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.cardsContainer}
                  columnWrapperStyle={numColumns > 1 ? styles.row : undefined}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => <CreatureCard creature={item} />}
                  />
              </ScrollView>
              )
            }
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
    zIndex: 1000,
    elevation: 5,
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
  row: {
    justifyContent: "space-around",
    marginBottom: 16,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#e3a15c",
  },
});