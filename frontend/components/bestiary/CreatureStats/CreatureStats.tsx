import { FlatList, StyleSheet, View } from "react-native";
import StatCard from "./StatCard";

interface Stat {
  label: string;
  shortLabel: string;
  value: number;
  frame: any;
}

interface CreatureStatsProps {
  stats: Stat[];
  colors: {
    statColor: string;
    modifierColor: string;
  }
}

export default function CreatureStats({
  stats,
  colors
}: CreatureStatsProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={stats}
        numColumns={6}
        keyExtractor={(item) => item.shortLabel}
        columnWrapperStyle={styles.row}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <StatCard
            title={item.label}
            abbreviation={item.shortLabel}
            value={item.value}
            frame={item.frame}
            statColor={colors.statColor}
            modifierColor={colors.modifierColor}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  row: {
    justifyContent: "space-around",
    marginBottom: 20,
  },
});