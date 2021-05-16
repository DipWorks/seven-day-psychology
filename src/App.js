import Home from "./components/Home";
import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home></Home>;
    </React.Fragment>
  );
}

export default App;
