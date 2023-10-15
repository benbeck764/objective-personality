export const getQueryParamsString = (
  obj:
    | string
    | Record<string, string>
    | URLSearchParams
    | string[][]
    | undefined
): string => {
  const result = new URLSearchParams(obj).toString();
  if (!result) return '';
  return '?' + result;
};
