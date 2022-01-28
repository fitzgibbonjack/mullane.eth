import React from "react";
import { Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Footer from "./Footer/Footer";
import "./App.scss";

// Apollo client
const client = new ApolloClient({
  uri: "https://jm-portfolio-cms.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </ApolloProvider>
  );
}

export default App;
