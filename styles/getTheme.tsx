import { ThemeMode, ThemeShape, themes } from "./themes";

export const getTheme = (themeMode: ThemeMode): ThemeShape => {
  return themes[themeMode];
};
