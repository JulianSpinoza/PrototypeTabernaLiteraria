import React from "react";
import {
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";

interface CharacterCardProps {
  name: string;
  avatar: any; // require(...) o { uri }
  onPress: () => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  avatar,
  onPress,
}) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={avatar} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2B2B2B",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
});
