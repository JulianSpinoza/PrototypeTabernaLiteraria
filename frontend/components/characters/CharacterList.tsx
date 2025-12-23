import React from "react";
import { View, StyleSheet } from "react-native";
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
    <View style= {styles.container}>
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
  container: {
    flexDirection: 'row',     
    flexWrap: 'wrap',          
    justifyContent: 'center', 
    width: '100%',
  }
});