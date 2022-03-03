import './portfolio.scss';

import { useState } from "react";

import basicoIcon from './../assets/svgs/Basico-Icon.svg'
import avancadoIcon from './../assets/svgs/Avancado-Icon.svg'
import supremoIcon from './../assets/svgs/Supremo-Icon.svg'
import basicoIconL from './../assets/svgs/Basico-Icon-L.svg'
import avancadoIconL from './../assets/svgs/Avancado-Icon-L.svg'
import supremoIconL from './../assets/svgs/Supremo-Icon-L.svg'

import imgPlaceHolder from './../assets/imgs/ImgPlaceHolder.png'

import Header from "./../components/header/Header"
import PortfolioItem from "./../components/portfolio/PortfolioItem"

export default function Portfolio() {

    const [basicoOn, SetBasicoOn] = useState(true);
    const [avancadoOn, SetAvancadoOn] = useState(true);
    const [supremoOn, SetSupremoOn] = useState(true);

  return (
    <div>
        <Header title="Nossos Projetos" subtitle="Se você está curioso e quer saber um pouco mais sobre o que fizemos," subtitle2="aqui temos alguns projetos para você ver."/>

        <div className="Portfolio-Content">
            <h3>Filtro</h3>
            <div className="Portfolio-Filter">
                <img src={( basicoOn ? basicoIcon : basicoIconL)} alt="basico icon" onClick={() => SetBasicoOn(!basicoOn)} />
                <img src={( avancadoOn ? avancadoIcon : avancadoIconL)} alt="avancado icon" onClick={() => SetAvancadoOn(!avancadoOn)} />
                <img src={( supremoOn ? supremoIcon : supremoIconL)} alt="supremo icon" onClick={() => SetSupremoOn(!supremoOn)}/>
            </div>
            <div className="Portfolio-Itens">
                <PortfolioItem img={imgPlaceHolder} icon={supremoIcon} active={supremoOn} title="Projeto xxxxxxx" subtitle="criação de game"/>
                <PortfolioItem img={imgPlaceHolder} icon={basicoIcon} active={basicoOn} title="Projeto xxxxxxx" subtitle="criação de game"/>
                <PortfolioItem img={imgPlaceHolder} icon={avancadoIcon} active={avancadoOn} title="Projeto xxxxxxx" subtitle="criação de game"/>
                <PortfolioItem img={imgPlaceHolder} icon={supremoIcon} active={supremoOn} title="Projeto xxxxxxx" subtitle="criação de game"/>
                <PortfolioItem img={imgPlaceHolder} icon={supremoIcon} active={supremoOn} title="Projeto xxxxxxx" subtitle="criação de game"/>
                <PortfolioItem img={imgPlaceHolder} icon={basicoIcon} active={basicoOn} title="Projeto xxxxxxx" subtitle="criação de game"/>
                <PortfolioItem img={imgPlaceHolder} icon={avancadoIcon} active={avancadoOn} title="Projeto xxxxxxx" subtitle="criação de game"/>
                <PortfolioItem img={imgPlaceHolder} icon={basicoIcon} active={basicoOn} title="Projeto xxxxxxx" subtitle="criação de game"/>
                <PortfolioItem img={imgPlaceHolder} icon={avancadoIcon} active={avancadoOn} title="Projeto xxxxxxx" subtitle="criação de game"/>
            </div>
        </div>
    </div>
  )
}
