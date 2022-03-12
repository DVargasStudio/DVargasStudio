import './portfolio.scss';

import { useState } from "react";
import {Helmet} from 'react-helmet-async'

import basicoIcon from './../assets/svgs/Basico-Icon.svg'
import avancadoIcon from './../assets/svgs/Avancado-Icon.svg'
import supremoIcon from './../assets/svgs/Supremo-Icon.svg'
import basicoIconL from './../assets/svgs/Basico-Icon-L.svg'
import avancadoIconL from './../assets/svgs/Avancado-Icon-L.svg'
import supremoIconL from './../assets/svgs/Supremo-Icon-L.svg'

import ShowBodele from './../assets/imgs/ShowBodeleCover.png'
import IdadeMedia from './../assets/imgs/DiaADiaIdadeMediaCover.png'
import ManualSobrevivencia from './../assets/imgs/ManualSobrevivenciaCover.png'
import DanDansGarden from './../assets/imgs/DanDansGardenCover.png'


import Header from "./../components/header/Header"
import PortfolioItem from "./../components/portfolio/PortfolioItem"

export default function Portfolio({refHeader}) {

    const [basicoOn, SetBasicoOn] = useState(true);
    const [avancadoOn, SetAvancadoOn] = useState(true);
    const [supremoOn, SetSupremoOn] = useState(true);

  return (
    <div>
        
        <Helmet>
          <title>Portfólio</title>
          <meta name="description" content="Se isso interessa a você e quiser saber um pouco mais o que fizemos, aqui estão alguns de nossos projetos exclusivos..."/>
          <link rel="canonical" href="/Portfolio" />
        </Helmet>

        <Header title="Projetos Exclusivos" subtitle="Se isso interessa a você e quiser saber um pouco mais o que fizemos," subtitle2="aqui estão alguns dos projetos." refHeader={refHeader}/>

        <div className="Portfolio-Content">
            <h3>Filtro</h3>
            <div className="Portfolio-Filter">
                <img src={( basicoOn ? basicoIcon : basicoIconL)} alt="basico icon" onClick={() => SetBasicoOn(!basicoOn)} />
                <img src={( avancadoOn ? avancadoIcon : avancadoIconL)} alt="avancado icon" onClick={() => SetAvancadoOn(!avancadoOn)} />
                <img src={( supremoOn ? supremoIcon : supremoIconL)} alt="supremo icon" onClick={() => SetSupremoOn(!supremoOn)}/>
            </div>
            <div className="Portfolio-Itens">
               <PortfolioItem link="/Portfolio/Dia-a-Dia-Idade-Media" img={IdadeMedia} icon={supremoIcon} active={supremoOn} title="Dia a dia na idade média" subtitle="série de animação"/>
               <PortfolioItem link="/Portfolio/Manual-do-Sobrevivente" img={ManualSobrevivencia} icon={basicoIcon} active={basicoOn} title="Manual de ultra sobrevivência" subtitle="série de animação"/>
               <PortfolioItem link="/Portfolio/Show-do-Bodele" img={ShowBodele} icon={avancadoIcon} active={avancadoOn} title="Show do Bodelé" subtitle="série de animação"/>
               <PortfolioItem link="/Portfolio/DanDans-Garden" img={DanDansGarden} icon={supremoIcon} active={supremoOn} title="DanDan's Garden" subtitle="criação de game"/>
            </div>
            <h3>Por questão de confidencialidade,</h3>
            <h4>não podemos divulgar projetos realizados à terceiros</h4>
        </div>
    </div>
  )
}
