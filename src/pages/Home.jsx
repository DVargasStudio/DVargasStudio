import Cover from "./../components/home/cover/Cover";
import About from "../components/home/about/About";
import Services from "./../components/home/services/Services";
import Packs from "./../components/home/packs/Packs";
import Contact from "./../components/home/contact/Contact";

import {Helmet} from 'react-helmet-async';

export default function Home({refHome, refAbout, refPacks, refContact}) {
  return (
    <div ref={refHome}>
      <Helmet>
        <title>D'Vargas Studio</title>
        <meta name="description" content="Somos uma produtora digital focada em realizar sonhos. Desde a elaboração do briefing até a estratégia de marketing, a D'Vargas pode lhe atender!"/>
        <link rel="canonical" href="/" />
      </Helmet>
      <Cover/>
      <About refAbout={refAbout}/>
      <Services/>
      <Packs refPacks={refPacks}/>
      <Contact refContact={refContact}/>
    </div>
  )
}
