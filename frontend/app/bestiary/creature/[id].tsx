import CreatureDetailCard from "@/components/bestiary/CreatureDetailCard";
import CreatureStats from "@/components/bestiary/CreatureStats/CreatureStats";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";
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
        <ScrollView style={styles.container}>

            <CreatureDetailCard creatureDetail={creatureMock}/>

            <CreatureStats stats={[
                {
                    label: "Fuerza",
                    shortLabel: "STR",
                    value: creatureMock.attributes.strength,
                    frame: require("@/assets/images/MarcoStats.png"),
                    statColor: "#397C4F",
                    modifierColor: "#F1E2A0",
                },
                {
                    label: "Inteligencia",
                    shortLabel: "STR",
                    value: creatureMock.attributes.strength,
                    frame: require("@/assets/images/MarcoStats.png"),
                    statColor: "#397C4F",
                    modifierColor: "#F1E2A0",
                },
                {
                    label: "Constitución",
                    shortLabel: "CON",
                    value: creatureMock.attributes.constitution,
                    frame: require("@/assets/images/MarcoStats.png"),
                    statColor: "#397C4F",
                    modifierColor: "#F1E2A0",
                },
                {
                    label: "Fuerza",
                    shortLabel: "STR",
                    value: creatureMock.attributes.strength,
                    frame: require("@/assets/images/MarcoStats.png"),
                    statColor: "#397C4F",
                    modifierColor: "#F1E2A0",
                },
                {
                    label: "Fuerza",
                    shortLabel: "STR",
                    value: creatureMock.attributes.strength,
                    frame: require("@/assets/images/MarcoStats.png"),
                    statColor: "#397C4F",
                    modifierColor: "#F1E2A0",
                },
                {
                    label: "Fuerza",
                    shortLabel: "STR",
                    value: creatureMock.attributes.strength,
                    frame: require("@/assets/images/MarcoStats.png"),
                    statColor: "#397C4F",
                    modifierColor: "#F1E2A0",
                },
            ]}/>

        </ScrollView>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a0d0a",
    paddingTop: 40,
  },
})