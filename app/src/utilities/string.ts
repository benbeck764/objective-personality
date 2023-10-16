export const isString = (obj: unknown): boolean => {
  return typeof obj === 'string' || obj instanceof String;
};

export const isEmpty = (obj: string): boolean => {
  return (
    typeof obj === 'undefined' || obj === null || obj === '' || obj.length === 0
  );
};
