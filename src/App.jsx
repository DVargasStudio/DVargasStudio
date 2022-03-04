import "./global.scss";

import { useState } from "react";

import { Routes, Route, HashRouter as Router } from "react-router-dom";

import Menu from "./components/menu/Menu";
import Nav from "./components/menu/Navigation";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import PacksBasicPage from "./pages/PacksBasicPage";
import PacksAdvancedPage from "./pages/PacksAdvancedPage";
import PacksSupremePage from "./pages/PacksSupremePage";
import ScrollToTop from "./assets/functions/ScrollToTop";
import Portfolio from "./pages/Portfolio";

function App() {
  const [menuOpen,SetMenuOpen ] = useState(false);
  return (
    <div>
      <Router>
        <ScrollToTop/>
        <Menu menuOpen={menuOpen} SetMenuOpen={SetMenuOpen}/>
        <Nav menuOpen={menuOpen} SetMenuOpen={SetMenuOpen}/>

        <Routes>
          <Route path="/DVargasStudio/" element={<Home />}/>
          <Route path="/DVargasStudio/Pacote-Basico/" element={<PacksBasicPage />}/>
          <Route path="/DVargasStudio/Pacote-Avancado/" element={<PacksAdvancedPage />}/>
          <Route path="/DVargasStudio/Pacote-Supremo/" element={<PacksSupremePage />}/>
          <Route path="/DVargasStudio/Portfolio/" element={<Portfolio />}/>
        </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
