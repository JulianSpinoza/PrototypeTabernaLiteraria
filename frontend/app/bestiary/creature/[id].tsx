import CreatureDetailCard from "@/components/bestiary/CreatureDetailCard";
import CreatureStats from "@/components/bestiary/CreatureStats/CreatureStats";
import { CreatureCartDimensions } from "@/constants/carts";
import { useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { LayoutChangeEvent, Text, ScrollView, StyleSheet, View } from "react-native";


const RIGHT_PANEL_MIN_WIDHT = 500;

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

    const [contentSize, setContentSize] = useState({
        width: 0,
        height: 0,
    })

    const layout = useMemo(() => {
        if(!contentSize.width || !contentSize.height) {
            return {
                isVertical:false,
                cardWidth: 400, // Numero de prueba?
                cardHeight: 420,
            };
        }

        const cardHeight = contentSize.height;

        const cardWidth = cardHeight * CreatureCartDimensions.aspectRadio;

        const remainingWidth =
            contentSize.width -
            cardWidth;

        const isVertical = remainingWidth < RIGHT_PANEL_MIN_WIDHT;

        return {
            isVertical,
            cardWidth,
            cardHeight,
        }

    }, [contentSize])

    const handleContentLayout = (event: LayoutChangeEvent) => {

        const {width, height} = event.nativeEvent.layout;

        setContentSize({
            width,
            height
        })

    }

    return (
        <View
            style={styles.container}
            onLayout={handleContentLayout}
        >
            {
                layout.isVertical ? (

                    <ScrollView
                        contentContainerStyle={styles.verticalContent}
                    >
                        <View style ={styles.verticalLeftPanel}>
                            <CreatureDetailCard 
                                creatureDetail={creatureMock}
                                backgroundColor="#397C4F"
                            />
                        </View>

                        <View style= {styles.verticalRightPanel}>

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

                ) : (

                    <View style={styles.horizontalContent}>

                        <View style={[
                            styles.leftPanel,
                            {
                                width:layout.cardWidth,
                            }
                        ]}>

                            <CreatureDetailCard 
                                creatureDetail={creatureMock}
                                backgroundColor="#397C4F"
                            />

                        </View>

                        <View style={styles.rightPanel}>
                             
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

                    </View>

                )
            }

        </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#1a0d0a",
  },
  verticalContent: {
    padding: 20,
    gap: 5,
  },

  verticalLeftPanel: {
    width: "100%",
    alignItems: "center",
  },

  verticalRightPanel: {
    width: "100%",
    backgroundColor: "red",
  },

  horizontalContent: {
    flex: 1,
    flexDirection:"row",
    padding: 20,
    gap: 5,
    justifyContent:"center",
  },

  rightPanel: {
    flex:1,
    backgroundColor:"yellow",
    maxWidth:900,
  },

  leftPanel: {
    justifyContent:"center",
    alignItems:"center",
  },

});