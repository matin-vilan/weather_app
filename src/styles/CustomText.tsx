import { defineStyleConfig } from "@chakra-ui/react";

export const CustomText = defineStyleConfig({
  variants: {
    boldTitle: {
      fontWeight: "bold",
      fontSize: "64px",
      textAlign: "center",
      color: "white",
      lineHeight: "55px",
    },
    subtitle: {
      fontWeight: "medium",
      fontSize: "16px",
      textAlign: "center",
      color: "white",
    },
    footNote: {
      fontWeight: "medium",
      fontSize: "12px",
      textAlign: "center",
      color: "white",
    },
    regularText: {
      fontWeight: "normal",
      fontSize: "20px",
      color: "white",
    },
  },
});
