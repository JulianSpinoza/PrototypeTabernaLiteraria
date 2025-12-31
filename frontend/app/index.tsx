import { View, StyleSheet, Text } from "react-native";

export default function CreaturesScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Criaturas</Text>
            
        </View>
          
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#200E0C",
    padding: 20,
  },
  title: {
    fontSize: 40, 
    margin: 15, 
    color: "white",
    alignSelf: "center",
  }
});