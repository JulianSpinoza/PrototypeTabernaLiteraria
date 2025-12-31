import { DefaultHeader } from "@/components/hearders/DefaultHeader";
import { Stack } from "expo-router";

export type Character = {
  name: string,
  id: string,
  avatar: undefined,
}

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        header: (props) => <DefaultHeader {...props}/>,
      }}
    >
      {/* Principal */}
      <Stack.Screen
        name="index"
        options={{
        }}
      />

      {/* Lista de personajes */}
      <Stack.Screen
        name="own-characters"
        options={{
          
        }}
      />

      {/* Detalle del personaje */}
      <Stack.Screen
        name="character/[id]"
        options={{
          headerBackTitle: "Volver",
          headerStyle: {backgroundColor:"#2E2EA3"},
          headerBackIcon: require("@/assets/images/BannerMagos.png")
        }}
      />
    </Stack>
  );
}
