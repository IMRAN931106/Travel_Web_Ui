import React from "react";
import "./app.css";
import { Navbar, Home, Main, Footer } from "./Components";
const App = () => {
  return (
    <>
      <div className="hide">
        <Navbar />
        <Home />
        <Main />
        <Footer />
      </div>
      <div className="show">Please open on a larger screen</div>
    </>
  );
};

export default App;
