
import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import { router } from "expo-router";
import { NativeStackHeaderProps, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { RutasPrincipales, useRutas } from "@/hooks/useRutas"; // Revisar posible hook
import { useEffect } from "react";

export type CustomOptions = NativeStackNavigationOptions & {
  rutasAdicionales?: RutasPrincipales | RutasPrincipales[];
};

export interface DefaultHeaderProps extends Omit<NativeStackHeaderProps, 'options'> {
  options: CustomOptions;
}

export function DefaultHeader ({navigation,route,options,back}:DefaultHeaderProps) {

    const rutasBase = [
        {
            id: '1',
            name: 'Personajes',
            uri: './own-characters',
        }
    ] as RutasPrincipales[];
    
    const {rutas,addAditionalRutas} = useRutas(rutasBase);

    const headerStyle = StyleSheet.flatten(options.headerStyle);

    const bgColor = headerStyle?.backgroundColor ?? "#B79A5A";

    const sourceLogo = options.headerBackIcon ?? require("@/assets/images/BannerPrincipal.png");

    useEffect(() => {
        if(options.rutasAdicionales != undefined) {
            addAditionalRutas(options.rutasAdicionales);
        }
    },[]);
    
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
                    {rutas.map((ruta)=> (
                        <Text 
                            key={ruta.id}
                            style={{fontSize: 25, height: "30%", marginHorizontal: 30}}
                            onPress={() => {
                                router.push({
                                    pathname: ruta.uri,
                                })
                            }}
                        >
                            {ruta.name}  
                        </Text>
                    ))}
                </View>
            </View>
        </View>
            
    );
}