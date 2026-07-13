import CreatureDetailCard from "@/components/bestiary/CreatureDetailCard";
import CreatureStats from "@/components/bestiary/CreatureStats/CreatureStats";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

export default function CreatureDetailScreen() {

    const { id } = useLocalSearchParams();

    const creatureMock = {
        id: "1",
        name: "Goblin SabioTormenta",
        creature_tier: {
            creature_form: "Pensante",
            creature_color: "Plata",
        },
        habitat: "Montaña",
        biome: "Montañas",
        stats: {
            hp: 30,
            armor: 13,
            movement: 6,
            size: "Pequeño",
        },
        image: {
            url: require("@/assets/images/Goblin.png"),
            alt: "Goblin SabioTormenta",
        },
        description: "Vacio",
        //habilities: [
        //    "Habilidad 1",
        //    "Habilidad 2",
        //],
        attributes: {
            strength: 2,
            dexterity: 4,
            constitution: -2,
            intelligence: 0,
            wisdom: 2,
            charisma: 1,
        },
    };

    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.scrollContent}
        >

            <View style={styles.leftContainer}>

                <CreatureDetailCard 
                    creatureDetail={creatureMock}
                    backgroundColor="#397C4F"
                />

            </View>

            <View style={styles.rightContainer}>

                <CreatureStats stats={
                    [
                        {
                            label: "Fuerza",
                            shortLabel: "STR",
                            value: creatureMock.attributes.strength,
                            frame: require("@/assets/images/MarcoStats.png"),
                        },
                        {
                            label: "Inteligencia",
                            shortLabel: "STR",
                            value: creatureMock.attributes.strength,
                            frame: require("@/assets/images/MarcoStats.png"),
                        },
                        {
                            label: "Constitución",
                            shortLabel: "CON",
                            value: creatureMock.attributes.constitution,
                            frame: require("@/assets/images/MarcoStats.png"),
                        },
                        {
                            label: "Fuerza",
                            shortLabel: "STR",
                            value: creatureMock.attributes.strength,
                            frame: require("@/assets/images/MarcoStats.png"),
                        },
                        {
                            label: "Fuerza",
                            shortLabel: "STR",
                            value: creatureMock.attributes.strength,
                            frame: require("@/assets/images/MarcoStats.png"),
                        },
                        {
                            label: "Fuerza",
                            shortLabel: "STR",
                            value: creatureMock.attributes.strength,
                            frame: require("@/assets/images/MarcoStats.png"),
                        },
                    ]}
                    colors={{
                        statColor: "#397C4F",
                        modifierColor: "#F1E2A0",
                    }}
                />

            </View>

        </ScrollView>
    );

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#1a0d0a",
  },
  scrollContent: {
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap", // Permite que el segundo panel baje si no hay espacio
  },
  leftContainer: {
    // En pantallas grandes ocupa un mínimo de 400px, pero crece si es necesario
    flexGrow: 1,
    flexBasis: 600,
    height: "100%",
    maxWidth:800, 
    padding: 50,
  },
  rightContainer: {
    // En pantallas grandes ocupa un mínimo de 600px, pero crece si es necesario
    flexGrow: 1,
    height: "100%",
    flexBasis: 400,
    paddingHorizontal: 50, 
    backgroundColor: "blue",
  }
});