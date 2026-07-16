import { FlatList, LayoutChangeEvent, StyleSheet, View } from "react-native";
import StatCard from "./StatCard";
import { useState } from "react";
import { StatCartDimensions } from "@/constants/carts";

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

  const [contentSize, setContentSize] = useState({
    width: 0,
    height: 0,
  })

  const numColumns = 
    contentSize.width > (StatCartDimensions.width+(StatCartDimensions.margin*2))*6 ? 6 : 3;

  const handleContentLayout = (event: LayoutChangeEvent) => {
    
    const {width, height} = event.nativeEvent.layout;

    setContentSize({
      width,
      height
    })

  }

  return (
    <View 
      style={styles.container}
      onLayout={handleContentLayout}
    >
      <FlatList
        key={numColumns}
        data={stats}
        numColumns={numColumns}
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
    width: "90%",
    marginHorizontal: "5%",
    marginVertical:20,
    backgroundColor:"blue"
  },

  row: {
    justifyContent: "center",
    marginVertical: 10,
  },
});