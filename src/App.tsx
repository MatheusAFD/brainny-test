import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router/Router";
import { AuthProvider } from "./Context/AuthContext";

import { client } from "../src/lib/apollo";

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
