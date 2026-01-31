// components/cards/CreatureCard.tsx
import { CartDimensions } from "@/constants/carts";
import { Creature } from "@/types/creature";
import { Image,  StyleSheet, Pressable } from "react-native";

type Props = {
  creature: Creature
}

export function CreatureCard({creature}: Props) {
  return (
    <Pressable style={styles.card}>
      <Image 
        source={{ uri:creature.image.url }} 
        style={styles.image}  />
    </Pressable>
  );
}

const ASPECT_RATIO = 517 / 750;
const CARD_WIDTH = CartDimensions.width;

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH*0.95,
    backgroundColor: "#2b140f",
    borderRadius: 12,
    padding: CARD_WIDTH*0.05,
    margin: 5,
    overflow: "hidden",
    aspectRatio: ASPECT_RATIO,
    // Fuerza que el aspect ratio funcione
    alignSelf: 'flex-start',
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
