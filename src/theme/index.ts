import { createTheme } from "@shopify/restyle";

const palette = {
  black: "#0B0B0B",
  white: "#fff",

  navy: "#0C0D34",
  navy70: "rgba(12, 13, 52, 0.7)",
  navy05: "rgba(12, 13, 52, 0.05)",

  teal: "#2CB9B0",
};

export const theme = createTheme({
  colors: {
    background: palette.white,
    foreground: palette.navy,
    foreground70: palette.navy70,
    foreground05: palette.navy05,
    accent: palette.teal,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadius: {
    s: 4,
    m: 10,
    l: 25,
    xl: 40,
    xxl: 75,
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
      fontWeight: "400",
      color: "foreground",
      fontFamily: "Montserrat",
    },

    defaults: {
      // We can define a default text variant here.
    },
  },
});

export type Theme = typeof theme;
