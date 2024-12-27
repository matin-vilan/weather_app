import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ReactQueryProvider } from "@libs/react-query/index.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ReactQueryProvider>
  </StrictMode>
);
