import { createTheme, useTheme as useRestyleTheme } from "@shopify/restyle";

const palette = {
  black: "#0B0B0B",
  white: "#fff",

  lightGray: "#F4F0EF",
  darkGray: "#8A8D90",

  navy: "#0C0D34",
  navy70: "rgba(12, 13, 52, 0.7)",
  navy50: "rgba(12, 13, 52, 0.5)",
  navy05: "rgba(12, 13, 52, 0.05)",
  red: "#FF0000",

  teal: "#2CB9B0",
  transparent: "transparent",
};

export const theme = createTheme({
  colors: {
    background: palette.white,
    foreground: palette.navy,
    foreground70: palette.navy70,
    foreground50: palette.navy50,
    foreground05: palette.navy05,
    accent: palette.teal,
    lightGray: palette.lightGray,
    darkGray: palette.darkGray,
    transparent: palette.transparent,
    error: palette.red,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    none: 0,
    s: 4,
    m: 10,
    l: 25,
    xl: 40,
    xxl: 75,
    full: 9999,
  },
  textVariants: {
    hero: {
      fontFamily: "Montserrat",
      fontSize: 80,
      lineHeight: 80,
      fontWeight: "600",
      color: "background",
      textAlign: "center",
    },
    title1: {
      fontFamily: "Montserrat",
      fontWeight: "500",
      fontSize: 28,
      lineHeight: 38,
      color: "foreground",
    },
    title2: {
      fontFamily: "Montserrat",
      fontWeight: "500",
      fontSize: 24,
      lineHeight: 30,
      color: "foreground",
    },
    body: {
      fontFamily: "Montserrat",
      fontWeight: "400",
      fontSize: 16,
      lineHeight: 24,
      color: "foreground70",
    },
    label: {
      fontSize: 16,
      lineHeight: 18,
      fontWeight: "500",
      color: "foreground",
      fontFamily: "Montserrat",
    },
    defaults: {
      fontFamily: "Montserrat",
      fontWeight: "400",
      fontSize: 16,
      lineHeight: 24,
      color: "foreground50",
    },
  },
});

export type Theme = typeof theme;

export const useTheme = () => {
  return useRestyleTheme<Theme>();
};
