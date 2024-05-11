export const getLocalStorage = (key: string): string => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem(key);
    return value ? value : '';
  }
  return '';
};
