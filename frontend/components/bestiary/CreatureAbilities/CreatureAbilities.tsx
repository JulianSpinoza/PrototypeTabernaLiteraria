import { StyleSheet, Text, View } from "react-native";

export default function CreaturesAbilities () {

    return (
        <View
            style={styles.container}
        >
            <Text
                style={styles.title}
            >
                {"Habilidades"}
            </Text>

            <View
                style={styles.list}
            >
                
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        backgroundColor:"purple"
    },
    title:{
        textAlign:"center",
        fontSize:40,
        backgroundColor:"red"
    },
    list:{

    }
})