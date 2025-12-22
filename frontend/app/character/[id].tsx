// app/character/[id].tsx
import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Modal,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Character } from "../_layout";

type SectionType =
  | "inventory"
  | "skills"
  | "knowledge"
  | "companions"
  | null;

function ActionButton({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}


export default function CharacterDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // 🔹 Mock temporal (luego backend o contexto)
  const character: Character = {
    id,
    name: id === "1" ? "Lucca Berlusconi" : "Sor Lucrezia",
    avatar:
      id === "1"
        ? require("@/assets/images/Lucca_pj.jpeg")
        : require("@/assets/images/Lucrezia.jpg"),
  };

  const [activeSection, setActiveSection] =
    useState<SectionType>(null);

  return (
    <View style={styles.container}>
      {/* Imagen */}
      <Image source={character.avatar} style={styles.image} />

      {/* Info */}
      <View style={styles.info}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.subtitle}>El joven ilusionista</Text>

        <View style={styles.buttons}>
          <ActionButton
            label="Inventario"
            onPress={() => setActiveSection("inventory")}
          />
          <ActionButton
            label="Habilidades"
            onPress={() => setActiveSection("skills")}
          />
          <ActionButton
            label="Conocimiento rúnico"
            onPress={() => setActiveSection("knowledge")}
          />
          <ActionButton
            label="Compañeros"
            onPress={() => setActiveSection("companions")}
          />
        </View>
      </View>

      {/* Modal único */}
      <Modal
        visible={activeSection !== null}
        transparent
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {//getModalTitle(activeSection)
              }
            </Text>

            <Text style={styles.modalBody}>
              Contenido de {activeSection}
            </Text>

            <Pressable
              style={styles.closeButton}
              onPress={() => setActiveSection(null)}
            >
              <Text style={styles.closeText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C0F0A",
    flexDirection: "row",
    padding: 20,
  },
  image: {
    width: 260,
    height: 360,
    borderRadius: 20,
    marginRight: 24,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "600",
  },
  subtitle: {
    color: "#CCC",
    fontStyle: "italic",
    marginBottom: 24,
  },
  buttons: {
    gap: 12,
  },
  button: {
    backgroundColor: "#2B2B2B",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },

  /* Modal */
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#1C0F0A",
    padding: 24,
    borderRadius: 16,
    width: "80%",
  },
  modalTitle: {
    color: "#FFF",
    fontSize: 20,
    marginBottom: 12,
  },
  modalBody: {
    color: "#CCC",
    marginBottom: 20,
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  closeText: {
    color: "#C89B3C",
  },
});

