export const toSnakeCase = (str: string): string => {
  return String(str).replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};

export const convertKeysToSnakeCase = (input: any): any => {
  if (Array.isArray(input)) {
    return input.map(convertKeysToSnakeCase);
  } else if (input !== null && typeof input === 'object') {
    if (input instanceof Date) {
      return input.toISOString();
    }
    return Object.entries(input).reduce((acc, [key, value]) => {
      const snakeKey = toSnakeCase(key);
      acc[snakeKey] = convertKeysToSnakeCase(value);
      return acc;
    }, {} as any);
  }
  return input;
};
