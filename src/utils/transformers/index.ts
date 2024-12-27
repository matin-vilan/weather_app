export function objectToQueryString(
  params: string | Record<string, any>
): string {
  // if queries be string  will be return same string
  // if queries be object will be returned query string
  if (!params) return "";
  if (typeof params === "string") return params;
  const searchParams = new URLSearchParams();

  Object.keys(params).forEach((key) => {
    const value = params[key];
    if (!value) return;
    if (Array.isArray(value)) {
      value.forEach((val) => searchParams.append(key, val));
    } else {
      searchParams.append(key, value);
    }
  });

  return searchParams.toString();
}
