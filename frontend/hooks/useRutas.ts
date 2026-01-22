import { useState } from "react";

import { ExternalPathString, RelativePathString, Stack } from "expo-router";

export interface RutasPrincipales{
  id: string;
  name: string;
  uri: RelativePathString | ExternalPathString;
}

export function useRutas(rutasBase?:RutasPrincipales[]) {

    const [rutas,setRutas] = useState<RutasPrincipales[]>(rutasBase ?? []);

    function addAditionalRutas(rutasAdicionales: RutasPrincipales | RutasPrincipales[]) {
        setRutas(prevRutas => {
            const rutasAInsertar = Array.isArray(rutasAdicionales) ? rutasAdicionales : [rutasAdicionales];
            return [...prevRutas, ...rutasAInsertar]
        });
    }

    return {
        rutas,
        addAditionalRutas
    }


}