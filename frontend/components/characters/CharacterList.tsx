import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CharacterCard } from "./CharacterCard";

interface Character {
  id: string;
  name: string;
  avatar: any;
}

interface CharacterListProps {
  characters: Character[];
  onSelect: (character: Character) => void;
}

export const CharacterList: React.FC<CharacterListProps> = ({
  characters,
  onSelect,
}) => {
  return (
    <View>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          name={character.name}
          avatar={character.avatar}
          onPress={() => onSelect(character)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
  },
});