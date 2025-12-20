import { CharacterList } from "@/components/characters/CharacterList";
import React from "react";
import { View, StyleSheet } from "react-native";

export default function HomeScreen() {

  const characters = [
    {
      id: "1",
      name: "Lucca Berlusconi",
      avatar: require("@/assets/images/Lucca_rol.jpeg"),
    },
    {
      id: "2",
      name: "Sor Lucrezia",
      avatar: require("@/assets/images/Lucrezia.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <CharacterList
        characters={characters}
        onSelect={(character) =>
          console.log("Seleccionaste:", character.name)
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C0F0A",
    padding: 20,
  },
});
