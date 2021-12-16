import React from "react";
import "./App.css";
import RouterEntry from "./desk/router";
import Styles from "./desk/ui/style/index";

function App() {
  const GlobalStyle = Styles.createGlobalStyles("");

  return (
    <>
      <GlobalStyle/>
      <RouterEntry/>
    </>
  );
}

export default App;
