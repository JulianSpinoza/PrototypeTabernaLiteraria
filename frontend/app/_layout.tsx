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
        headerStyle: {
          backgroundColor: "#e65e29ff",
        },
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontWeight: "600",
        },
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
