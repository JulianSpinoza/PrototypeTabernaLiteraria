import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";

interface StatCardProps {
  title: string;
  abbreviation: string;
  value: number;
  frame: ImageSourcePropType;

  statColor: string;
  modifierColor: string;

  size?: number;
}

const ASPECT_RATIO_CARD = 95 / 150;
const ASPECT_RATIO_TITLE =  11 / 95;
const ASPECT_RATIO_VALUE =  50 / 95;
const ASPECT_RATIO_ABBREVIATION =  30 / 95;

export default function StatCard({
  title,
  abbreviation,
  value,
  frame,
  statColor,
  modifierColor,
  size = 95,
}: StatCardProps) {
  return (
    <View style={[styles.container, { width: size }]}>
      {/* Fondos */}
      <View
        style={[
          styles.statBackground,
          {
            backgroundColor: statColor,
          },
        ]}
      />

      <View
        style={[
          styles.modifierBackground,
          {
            backgroundColor: modifierColor,
          },
        ]}
      />

      {/* Marco */}
      <ImageBackground
        source={frame}
        resizeMode="stretch"
        style={styles.frame}
      >
        <View style={styles.content}>
          <View style={styles.containerTitle}>
            <Text
              style={[styles.title,
                {
                  fontSize: (ASPECT_RATIO_TITLE)*size,
                },
              ]}
              numberOfLines={1}
            >
              {title}
            </Text>
          </View>
          <View style={styles.containerValue}>
            <Text 
              style={[styles.value,
                {
                  fontSize: (ASPECT_RATIO_VALUE)*size,
                },
              ]}
            >
              {value >= 0 ? `+${value}` : value}
            </Text>
          </View>
          <View style={styles.containerAbbreviation}>
            <Text 
              style={[styles.abbreviation,
                {
                  fontSize: (ASPECT_RATIO_ABBREVIATION)*size,
                },
              ]}
            >
              {abbreviation}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    aspectRatio: ASPECT_RATIO_CARD,
  },

  statBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },

  modifierBackground: {
    position: "absolute",
    top: "16%",
    left: "6.5%",
    width: "88.5%",
    height: "50%",
  },

  frame: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },

  content: {
    flex: 1,
    alignItems: "center",
  },

  containerTitle: {
    height: "16%",
    justifyContent: "center",
  },

  title: {
    color: "#FFFFFF",
    textAlign: "center",
  },

  containerValue: {
    height: "49%",
    justifyContent: "center",
  },

  value: {
    fontWeight: "bold",
    color: "#000",
  },

  containerAbbreviation: {
    height: "35%",
    justifyContent: "center",
  },

  abbreviation: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});