import { ScrollView, StyleSheet, Text, View } from "react-native";
import Ability from "./Ability";

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

            <ScrollView
                style={styles.list}
            >
                <Ability/>
                
            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        width: "90%",
        marginHorizontal: "5%",
        backgroundColor:"purple",
        
    },
    title:{
        textAlign:"center",
        alignContent:"center",
        fontSize:35,
        //backgroundColor:"red",
    },
    list:{
        flex:1,
        paddingVertical: 10,
    }
})