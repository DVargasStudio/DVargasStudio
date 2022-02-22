import "./global.scss";

import { useState } from "react";

import Menu from "./components/menu/Menu";
import Nav from "./components/menu/Navigation";
import Cover from "./components/cover/Cover";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Packs from "./components/packs/Packs";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const [menuOpen,SetMenuOpen ] = useState(false);
  return (
    <div>
      <Menu menuOpen={menuOpen} SetMenuOpen={SetMenuOpen}/>
      <Nav menuOpen={menuOpen} SetMenuOpen={SetMenuOpen}/>
      <Cover/>
      <About/>
      <Services/>
      <Packs/>
      <Contact/>
      <Footer/>
    </div>
    
  );
}

export default App;
