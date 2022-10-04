import { ApolloClient, InMemoryCache } from "@apollo/client";

const token = localStorage.getItem("token");

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URI,
  cache: new InMemoryCache(),
  headers: {
    authorization: token ? `Bearer ${token}` : "",
  },
});
