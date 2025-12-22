import { CharacterList } from "@/components/characters/CharacterList";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Character } from "./_layout";
import { router } from "expo-router";

export default function CharactersScreen() {

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

  const handleSelectCharacter = (character: Character) => {
    router.push({
      pathname: "/character/[id]",
      params: { id: character.id },
    });
  };

  return (
    <View style={styles.container}>
      <CharacterList
        characters={characters}
        onSelect={handleSelectCharacter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#200E0C",
    padding: 20,
  },
});
