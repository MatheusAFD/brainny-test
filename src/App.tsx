import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { Router } from "./Router/Router";
import { AuthProvider } from "./Context/AuthContext";

import { client } from "../src/lib/apollo";

function App() {
  return (
    <div>
      <ChakraProvider>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <AuthProvider>
              <Router />
            </AuthProvider>
          </BrowserRouter>
        </ApolloProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
