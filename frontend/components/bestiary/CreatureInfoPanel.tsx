import { StyleSheet, Text, View } from "react-native";

interface CreatureInfoProps {
  tier: {
    form: string;
    power: string;
  };

  stats?: {
    hp: number;
    armor: number;
    movement: number;
    size: string;
  };
}

export default function CreatureInfoPanel({
  tier,
  stats,
}: CreatureInfoProps) {
  return (
    <View style={styles.container}>
      <InfoRow label="Tier Forma" value={tier.form} />
      <InfoRow label="Tier Poder" value={tier.power} />
      {stats !== undefined && (
        <>
            <InfoRow label="HP" value={stats.hp.toString()} />
            <InfoRow label="Armadura" value={stats.armor.toString()} />
            <InfoRow label="Movimiento" value={stats.movement.toString()} />
            <InfoRow label="Tamaño" value={stats.size} />
        </>
      )}
    </View>
  );
}

interface InfoRowProps {
  label: string;
  value: string;
}

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 12,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#1F1F1F",
    gap: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#D9D9D9",
  },

  value: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});