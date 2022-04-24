import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql",
  // link: link,
});

const App = (): any => {
  // const [count, setCount] = useState(0);

  return (
    <ApolloProvider client={client}>
      <div className="App"></div>
    </ApolloProvider>
  );
};

export default App;
