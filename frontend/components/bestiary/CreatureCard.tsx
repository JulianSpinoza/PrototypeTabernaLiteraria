// components/cards/CreatureCard.tsx
import { CartDimensions } from "@/constants/carts";
import { Creature } from "@/types/creature";
import { Image,  StyleSheet, Pressable } from "react-native";

import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring 
} from 'react-native-reanimated';

type Props = {
  creature: Creature
}

export function CreatureCard({creature}: Props) {

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <Pressable 
      onHoverIn={() => (scale.value = withSpring(1.05))} 
      onHoverOut={() => (scale.value = withSpring(1))}
      style={styles.cardContainer}
    >
      <Animated.View style={[styles.card, animatedStyle]}>
        <Image 
          source={{ uri:creature.image.url }} 
          style={styles.image}  />
      </Animated.View>
    </Pressable>
  );
}

const ASPECT_RATIO = 517 / 750;
const CARD_WIDTH = CartDimensions.width;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5, // El margen se queda fuera para que no salte el layout al ampliar
    zIndex: 1,
  },
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
