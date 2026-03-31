export const toStringSearchParams = (
  query: any,
  prefix: string = "",
  params = new URLSearchParams(),
) => {
  Object.entries(query).forEach(([key, value]) => {
    // Generamos la llave con el formato: llave o prefijo[llave]
    const paramKey = prefix ? `${prefix}[${key}]` : key;

    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      // IMPORTANTE: Pasamos el mismo objeto 'params' para que todos escriban en él
      toStringSearchParams(value, paramKey, params);
    } else if (value !== undefined && value !== "") {
      // Si es un valor simple o un array, lo agregamos
      params.append(paramKey, String(value));
    }
  });

  return params.toString();
};
