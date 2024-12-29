import { extendTheme } from "@chakra-ui/react";
import { CustomText } from "./CustomText";

export const theme = extendTheme({
  colors: {
    brand: {
      yellow: "#DDB130",
    },
  },
  components: {
    Text: CustomText,
  },
});
