/**
 * Recursive function to translate an Object to append it to URLSearchParams
 * @param query Query filter object to translate
 * @param prefix Prefix for nested keys (optional)
 * @returns String of query params
 */
export const toStringSearchParams = (query: any, prefix: string = "") => {
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value && typeof value === "object") {
      toStringSearchParams(value, prefix ? `${prefix}[${key}]` : key);
    } else if (value !== undefined && value !== "") {
      const paramKey = prefix ? `${prefix}[${key}]` : key;
      params.append(paramKey, String(value));
    }
  });

  return params.toString();
};
