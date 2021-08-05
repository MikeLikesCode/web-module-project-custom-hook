import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
  const [darkModeValue, setDarkModeValue] = useLocalStorage("dark", true);
  return [darkModeValue, setDarkModeValue];
}
