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

  backgroundColor?: string,
}

export default function CreatureInfoPanel({
  tier,
  stats,
  backgroundColor
}: CreatureInfoProps) {
  return (
    <View 
      style={[styles.container,
        {
          backgroundColor
        }
      ]}
    >
      <InfoRow label="Tier Forma:" value={tier.form} />
      <InfoRow label="Tier Poder:" value={tier.power} />
      {stats !== undefined && (
        <>
            <InfoRow label="Puntos de Golpe:" value={stats.hp.toString()+" HP"} />
            <InfoRow label="Clase de Armadura:" value={stats.armor.toString()+" CA"} />
            <InfoRow label="Casillas de Movimiento:" value={stats.movement.toString()+" casillas"} />
            <InfoRow label="Tamaño:" value={stats.size} />
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
      <View style={[styles.column, {width: "40%", alignItems: "flex-end"}]}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={[styles.column, {width: "20%",alignItems: "flex-start"}]}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 12,
    gap: 10,
  },

  column: {
    marginHorizontal: "2%",
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    fontSize: 25,
    fontWeight: "600",
    color: "#D9D9D9",
    textAlign: "right",
  },

  value: {
    fontSize: 20,
    color: "#FFFFFF",
  },
});