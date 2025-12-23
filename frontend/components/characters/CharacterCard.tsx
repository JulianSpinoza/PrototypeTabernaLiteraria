import React from "react";
import {
  Text,
  Image,
  Pressable,
  StyleSheet,
  View,
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
      <View style={styles.image}>
        <Image source={avatar} resizeMode="cover" style={styles.avatar} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
};

const CARD_HEIGHT = 150;

const styles = StyleSheet.create({
  card: {
    height: CARD_HEIGHT,
    minWidth: 500,
    flex: 1,
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2B2B2B",
    padding: "3%",
    borderRadius: 12,
    margin: 12,
  },
  image: {
    height: CARD_HEIGHT*(1-0.3),     
    aspectRatio: 1,       
    borderRadius: "100%",    
    overflow: 'hidden',
    marginRight: "4%", 
  },
  avatar: {
    height: "100%",
    width: "100%",
  },
  name: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "500",
  },
});
