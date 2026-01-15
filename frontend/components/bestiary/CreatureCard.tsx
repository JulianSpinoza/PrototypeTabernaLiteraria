// components/cards/CreatureCard.tsx
import { View, Image, Text, StyleSheet } from "react-native";

type Creature = {
      id: string,
      name: string,
      tier: string,
      habitat: string,
      biome: string,
      hp: number,
      armor: number,
      image: string,
    };

export function CreatureCard( creature  : Creature) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: creature.image }} style={styles.image} />
      <Text style={styles.title}>{creature.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    backgroundColor: "#2b140f",
    borderRadius: 12,
    padding: 8,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 4,
    borderRadius: 8,
  },
  title: {
    color: "#fff",
    marginTop: 6,
    textAlign: "center",
  },
});
