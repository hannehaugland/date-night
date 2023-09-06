import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import Generator from "./components/Generator";
import Head from "./components/Head";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Head />
        <Generator />
      </div>
    </ChakraProvider>
  );
}

export default App;
