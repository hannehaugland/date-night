import "./App.css";
import { ChakraProvider, VStack } from "@chakra-ui/react";

import Generator from "./components/Generator";
import Head from "./components/Head";

function App() {
  return (
    <ChakraProvider>
      <VStack gap={10}>
        <Head />
        <Generator />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
