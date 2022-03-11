import "./global.scss";

import { useState} from "react";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { useInView } from "react-intersection-observer";

import Menu from "./components/menu/Menu";
import Nav from "./components/menu/Navigation";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import PacksBasicPage from "./pages/PacksBasicPage";
import PacksAdvancedPage from "./pages/PacksAdvancedPage";
import PacksSupremePage from "./pages/PacksSupremePage";
import ScrollToTop from "./assets/functions/ScrollToTop";
import Portfolio from "./pages/Portfolio";
import ManualSobrevivencia from "./pages/PortfolioPages/ManualSobrevivencia";
import DanDansGarden from "./pages/PortfolioPages/DanDansGarden";
import IdadeMedia from "./pages/PortfolioPages/IdadeMedia";
import ShowBodele from "./pages/PortfolioPages/ShowBodele";

function App() {
  const [menuOpen,SetMenuOpen ] = useState(false);

  const [homepageRef, inHomepage] = useInView({threshold: 0.01,});
  const [aboutRef, inAbout] = useInView({rootMargin: "-8% 0px -90% 0px", threshold: 0.01,});
  const [packsRef, inPacks] = useInView({rootMargin: "-8% 0px -90% 0px", threshold: 0.01,});
  const [contactRef, inContact] = useInView({rootMargin: "-8% 0px -90% 0px", threshold: 0.01,});
  const [headerRef, inHeader] = useInView({rootMargin: "-8% 0px -90% 0px", threshold: 0.01,});

  return (
    <div>
      <Router>
        <ScrollToTop/>
        <Menu menuOpen={menuOpen} SetMenuOpen={SetMenuOpen} inHomePage={inHomepage} changeColor={ (inHomepage && (inAbout || inPacks || inContact)) || (!inHeader && !inHomepage) ? true : false}/>
        <Nav menuOpen={menuOpen} SetMenuOpen={SetMenuOpen} inHomePage={inHomepage}/>

        <Routes>
          <Route path="/" element={<Home refHome={homepageRef} refAbout={aboutRef} refPacks={packsRef} refContact={contactRef}/>}/>
          <Route path="/Pacote-Basico/" element={<PacksBasicPage refHeader={headerRef}/>}/>
          <Route path="/Pacote-Avancado/" element={<PacksAdvancedPage refHeader={headerRef}/>}/>
          <Route path="/Pacote-Supremo/" element={<PacksSupremePage refHeader={headerRef}/>}/>
          <Route path="/Portfolio/" element={<Portfolio refHeader={headerRef}/>}/>
          <Route path="/Portfolio/Manual-do-Sobrevivente" element={<ManualSobrevivencia refHeader={headerRef}/> }/>
          <Route path="/Portfolio/Show-do-Bodele" element={<ShowBodele refHeader={headerRef}/>}/>
          <Route path="/Portfolio/Dia-a-Dia-Idade-Media" element={<IdadeMedia refHeader={headerRef}/>}/>
          <Route path="/Portfolio/DanDans-Garden" element={<DanDansGarden refHeader={headerRef}/>}/>
        </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
