import { FlatList, StyleSheet, View } from "react-native";
import StatCard from "./StatCard";

interface Stat {
  label: string;
  shortLabel: string;
  value: number;
  frame: any;
  statColor: string;
  modifierColor: string;
}

interface CreatureStatsProps {
  stats: Stat[];
}

export default function CreatureStats({
  stats,
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
            statColor={item.statColor}
            modifierColor={item.modifierColor}
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