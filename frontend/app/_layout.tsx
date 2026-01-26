import { CustomOptions, DefaultHeader, DefaultHeaderProps } from "@/components/hearders/DefaultHeader";
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
        header: (props) => <DefaultHeader {...(props as DefaultHeaderProps)}/>,
      }}
    >
      {/* Principal */}
      <Stack.Screen
        name="index"
        options={{
          rutasAdicionales: [
            
          ],
        } as CustomOptions}
      />

      {/* Lista de personajes */}
      <Stack.Screen
        name="own-characters"
        options={{

        } as CustomOptions }
      />

      {/* Detalle del personaje */}
      <Stack.Screen
        name="character/[id]"
        options={{
          headerBackTitle: "Volver",
          headerStyle: {backgroundColor:"#2E2EA3"},
          headerBackIcon: require("@/assets/images/BannerMagos.png")
        } as CustomOptions}
      />
    </Stack>
  );
}
