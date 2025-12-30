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
        header:DefaultHeader,
      }}
    >
      {/* Lista de personajes */}
      <Stack.Screen
        name="index"
        options={{
          title: "Tus personajes",
        }}
      />

      {/* Detalle del personaje */}
      <Stack.Screen
        name="character/[id]"
        options={{
          title: "Detalle del personaje",
          headerBackTitle: "Volver",
        }}
      />
    </Stack>
  );
}
