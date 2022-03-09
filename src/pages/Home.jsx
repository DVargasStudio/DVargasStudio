import Cover from "./../components/home/cover/Cover";
import About from "../components/home/about/About";
import Services from "./../components/home/services/Services";
import Packs from "./../components/home/packs/Packs";
import Contact from "./../components/home/contact/Contact";

export default function Home({refHome, refAbout, refPacks, refContact}) {
  return (
    <div ref={refHome}>
      <Cover/>
      <About refAbout={refAbout}/>
      <Services/>
      <Packs refPacks={refPacks}/>
      <Contact refContact={refContact}/>
    </div>
  )
}
