import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      {/* <DarkModeSwitch /> */}
      <Header />
      <About /> <Projects /> <Contact />
    </div>
  );
}
export default App;
