
import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import { router } from "expo-router";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export function DefaultHeader ({navigation,route,options,back}:NativeStackHeaderProps) {

    const headerStyle = StyleSheet.flatten(options.headerStyle);

    const bgColor = headerStyle?.backgroundColor ?? "#B79A5A";

    const sourceLogo = options.headerBackIcon ?? require("@/assets/images/BannerPrincipal.png");

    return (
        <View style= {{ 
            justifyContent:"center", 
            height:150, 
            backgroundColor: bgColor,
            }}>
            <View style= {{
                justifyContent: "space-between",
                flexDirection: "row", 
                margin: "3%",
                height: "70%", 
                }}>
                <Pressable
                    style={{ width: 400}}
                    onPress={() => {
                        router.push({
                            pathname: "/",
                        })
                    }}
                >
                    <Image
                    style = {{height: "100%", width: "100%"}}
                    resizeMode='contain'
                    source={sourceLogo}
                />
                </Pressable>
                <View style= {{ flexDirection: "row", alignItems:"center"}}>
                    <Text 
                    style={{fontSize: 25, height: "30%", marginHorizontal: 30}}
                    onPress={() => {
                        router.push({
                            pathname: "/own-characters",
                        })
                    }}
                    >
                        Personajes   
                    </Text>
                </View>
            </View>
        </View>
            
    );
}