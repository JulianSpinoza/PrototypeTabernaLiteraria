import { Image, View } from "react-native";

export const DefaultHeader = () => {
    return (
        <View style= {{ height:200, justifyContent:"center", backgroundColor: "#B79A5A", }}>
            <Image
                style={{ height: "70%", width: 400, margin: "3%"}}
                resizeMode='contain'
                source={require("@/assets/images/BannerPrincipal.png")}
            />
        </View>
            
    );
}