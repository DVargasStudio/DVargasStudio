import "./global.scss";
import Menu from "./components/menu/Menu";
import Cover from "./components/cover/Cover";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Packs from "./components/packs/Packs";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Menu/>
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
