import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "./routes";
import { Container } from "@chakra-ui/react";
import { createDynamicContext } from "@utils/dynamicContext";
import { EUnitsType } from "./types";
import { getLocalStorage } from "@utils/storage";
import { useState } from "react";
import { STORAGE_UNIT_NAME } from "./constants";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      retry: 2,
      staleTime: 10000,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

export interface IAppProvider {
  units: EUnitsType;
  setUnit: (props: EUnitsType) => void;
}

export const AppProvider = createDynamicContext<IAppProvider>();

function App() {
  const [units, setUnit] = useState(
    (getLocalStorage(STORAGE_UNIT_NAME) as EUnitsType) || "M"
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Container
        bg="linear-gradient(to bottom, #3b007d, #8741c5)"
        maxW="sm"
        border="1px solid black"
        rounded="lg"
        h="full"
      >
        <AppProvider.ContextProvider units={units} setUnit={setUnit}>
          <AppRouter />
        </AppProvider.ContextProvider>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
