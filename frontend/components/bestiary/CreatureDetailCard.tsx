import { SpecificCreature } from "@/types/creature"
import { useState } from "react";
import { Image, Platform, Pressable, StyleSheet, View } from "react-native";
import CreatureInfoPanel from "./CreatureInfoPanel";

type Props = {
    creatureDetail: SpecificCreature
}

export default function CreatureDetailCard({
  creatureDetail
}: Props) {
  const [expanded, setExpanded] = useState(false);

  const isWeb = Platform.OS === "web";

  const handlePress = () => {
    if (!isWeb) {
      setExpanded((prev) => !prev);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handlePress}
        onHoverIn={() => isWeb && setExpanded(true)}
        onHoverOut={() => isWeb && setExpanded(false)}
      >
        <Image
          source= {creatureDetail.image.url || require("@/assets/images/Lucca_pj.jpeg")}
          //source={{ uri:creatureDetail.image.url }}
          alt={ creatureDetail.image.alt }
          style={styles.image}
          resizeMode="contain"
        />
      </Pressable>

      {expanded && (
        <CreatureInfoPanel
          tier={{
            form: creatureDetail.creature_tier.creature_form,
            power: creatureDetail.creature_tier.creature_color,
          }}
          stats={creatureDetail.stats}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  image: {
    width: 340,
    height: 480,
  },
});