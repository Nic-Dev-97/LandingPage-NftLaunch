import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./pages/about";
import Begin from "./pages/begin";
import Contact from "./pages/contact";

//import Rotas from "./routes/routes";

function App() {
  return (
    <Router>
      <Begin/>
      <About/>
      <Contact/>
    </Router>
  );
}

export default App;
