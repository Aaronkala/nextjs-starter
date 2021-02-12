export type ThemeMode = "light" | "dark";
export type ThemeShape = {
  colors: {
    textPrimary: string;
  };
};

export const themes: Record<ThemeMode, ThemeShape> = {
  light: {
    colors: {
      textPrimary: "rgba(32, 33, 37, 1)",
    },
  },
  dark: {
    colors: {
      textPrimary: "rgba(255, 255, 255, 1)",
    },
  },
};
