import { Image, StyleSheet, Text, View } from "react-native";

interface AbilityProps {
    name:string,
    skill_type:string,
    modifier:string,
    description:string,
}

export default function Ability() {

    

    return (
        <View 
            style={[styles.container,abilityStyle.pasive]}
        >
            <Image
                source = {
                    require("@/assets/images/Pasive.png")
                }
                resizeMode="contain"
                style={styles.logo}
            />

            <View style={styles.content}>
                <Text style={styles.title}>{"Titulo"}</Text>
                

            </View>

            <View style={styles.modifier}>

                <Text style={styles.modifier}>{"+DEX"}</Text>

            </View>
            

        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        borderRadius:20,
        minHeight:100,
        paddingHorizontal:15,
    },
    logo: {
        width: 100,
        height:"100%",
        marginHorizontal:15,
    },
    content: {
        flex:1,
        minWidth:"50%",
        marginVertical: 20,
        marginHorizontal:10,
        backgroundColor: "orange"
    },
    modifier: {
        width:100,
        textAlign:"center",
        justifyContent:"center",
        fontSize:35,
        fontWeight:"bold",
    },
    title:  {
        textAlign:"center",
        fontSize:18,
        fontWeight:"bold",
        marginBottom:10,
        backgroundColor:"red",
    }
});

const abilityStyle = StyleSheet.create({
    pasive: {
        backgroundColor:"#319EC3",
        opacity:0.8,
    }
})