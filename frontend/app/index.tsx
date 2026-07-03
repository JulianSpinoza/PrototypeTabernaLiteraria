import { CreatureCard } from "@/components/bestiary/CreatureCard";
import { RangeFilter } from "@/components/filters/RangeFilter";
import { SingleSelectionFilter, MultiSelectionFilter } from "@/components/filters/SelectionFilter";
import { TextFilter } from "@/components/filters/TextFilter";
import { CartDimensions } from "@/constants/carts";
import { useClassifiers } from "@/hooks/useClassifiers";
import { useCreatures } from "@/hooks/useCreatures";
import { useInterval } from "@/hooks/useInterval";
import { Creature } from "@/types/creature";
import { ItemList, MultiItemList } from "@/types/filterTypes";
import { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, Text, useWindowDimensions, FlatList, ScrollView, Pressable, ActivityIndicator } from "react-native";

export default function CreaturesScreen() {

  const { width } = useWindowDimensions();
  // Convert this const in a function
  const numColumns = width > CartDimensions.width*5 ? 5 : width > CartDimensions.width*4 ? 4 : width > CartDimensions.width*3 ? 3 : width > CartDimensions.width*2 ? 2 : 1;

  // 🎛 Estado de filtros
  const [tierForm, setTierForm] = useState("");
  const [tierColor, setTierColor] = useState("");
  const [habitat, setHabitat] = useState("");
  const [biome, setBiome] = useState("");
  const [name, setName] = useState("");
  const {
    minor: minorHP,
    higher: higherHP,
    setInterval: setHP
  } = useInterval(1,120); 
  const {
    minor: minorCA,
    higher: higherCA,
    setInterval: setCA
  } = useInterval(1,50); 

  const {
    creature_loading,
    creature_error,
    creatures,
    fetchCreatures,
  } = useCreatures<Creature[]>()

  const {
    classifier_loading: creature_color_loading,
    classifier_error: creature_color_error,
    classifiers: creature_colors,
    fetchClassifier: fetchCreatureColors,
  } = useClassifiers<ItemList[]>([]);

  const {
    classifier_loading: creature_form_loading,
    classifier_error: creature_form_error,
    classifiers: creature_forms,
    fetchClassifier: fetchCreatureForms,
  } = useClassifiers<ItemList[]>([]);

  const {
    classifier_loading: creature_tier_loading,
    classifier_error: creature_tier_error,
    classifiers: creature_tiers,
    fetchClassifier: fetchCreatureTiers,
  } = useClassifiers<MultiItemList[]>([]);

  const {
    classifier_loading: biome_loading,
    classifier_error: biome_error,
    classifiers: biomes,
    fetchClassifier: fetchBiomes,
  } = useClassifiers<ItemList[]>([]);

  useEffect(() => {
    fetchCreatures({});
    fetchCreatureColors("creature_color");
    fetchCreatureForms("creature_form");
    fetchCreatureTiers("creature_tier");
    fetchBiomes("biome")
  },[]);

  const filterCreatures = () => {
    fetchCreatures({
      name: name,
      biome: biome,
      habitat: habitat,
      tier: {
        form: tierForm,
        color: tierColor,
      },
      stats: {
        hp:{
          min: minorHP,
          max: higherHP,
        },
        ca:{
          min: minorCA,
          max: higherCA,
        }
      }

    })
  }

  const renderCreatureCard = useCallback(({ item }: {item: Creature}) => <CreatureCard creature={item} />,[])

  return (
      <View style={styles.container}>
          <Text style={styles.title}>Criaturas</Text>   

            {/* 🔤 Filtros de texto */}
            <View style={styles.textFiltersRow}>

              <SingleSelectionFilter 
                llave="Filter Bioma"
                textInput={{
                  placeholder:"Bioma",
                  value:biome,
                  onChange:setBiome,
                }}
                listOfOptions={biomes} 
              />
              <MultiSelectionFilter 
                filters={[
                  {
                    llave:"creature_form",
                    textInput: {
                      placeholder:"Tier Forma",
                      value:tierForm,
                      onChange:setTierForm,
                    },
                    listOfOptions: creature_forms,
                  },
                  {
                    llave:"creature_color",
                    textInput: {
                      placeholder:"Tier Color",
                      value:tierColor,
                      onChange:setTierColor,
                    },
                    listOfOptions: creature_colors
                  }
                ]}
                listOfResults={creature_tiers}
              />

              <TextFilter 
                placeholder="Habitat" 
                value={habitat} 
                onChange={setHabitat} 
              />

            </View>

            <View style={styles.nameFilter}>
              <TextFilter placeholder="Nombre" value={name} onChange={setName} />
            </View>

            {/* 🎚 Filtros numéricos */}
            <View style={styles.rangeFiltersRow}>
              <RangeFilter
                label="Puntos de salud"
                min={1}
                max={120}
                minorValue={minorHP}
                higherValue={higherHP}
                onChange={setHP}
              />

               <Pressable style={styles.circle} onPress={filterCreatures}></Pressable>

              <RangeFilter
                label="Puntos de armadura"
                min={1}
                max={50}
                minorValue={minorCA}
                higherValue={higherCA}
                onChange={setCA}
              />
            </View>

            <View style={styles.main_container}>
              {/* creature_loading */}
              {creature_loading && (
                <ActivityIndicator size="large" color="#ffffff" />
              )}

              {/* creature_error */}
              {creature_error && (
                <Text style={styles.text}>{creature_error}</Text> 
              )}

              {/* Empty Space */}
              {!creature_loading && !creature_error && creatures?.length === 0 && (
                <Text style={styles.text}>No existen criaturas</Text> 
              )}

              {/* Carts */}
              {!creature_loading && !creature_error && (
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
                    renderItem={renderCreatureCard}
                    />
                </ScrollView>
                )
              }
            </View>
      </View>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a0d0a",
    paddingTop: 40,
  },
  main_container:{
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    color: "#fff",
    textAlign: "center",
    marginBottom: 24,
  },
  text: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
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