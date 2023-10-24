import "./App.css";
import { ChakraProvider, VStack } from "@chakra-ui/react";

import Generator from "./components/Generator";
import Head from "./components/Head";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <VStack gap={10}>
          <Head />
          <Generator />
        </VStack>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
