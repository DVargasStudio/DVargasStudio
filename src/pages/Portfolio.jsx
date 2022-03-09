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

export default function Portfolio({refHeader}) {

    const [basicoOn, SetBasicoOn] = useState(true);
    const [avancadoOn, SetAvancadoOn] = useState(true);
    const [supremoOn, SetSupremoOn] = useState(true);

  return (
    <div>
        <Header title="Projetos Exclusivos" subtitle="Se isso interessa a você e quiser saber um pouco mais o que fizemos," subtitle2="aqui estão alguns dos projetos." refHeader={refHeader}/>

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
            <h3>Por questão de confidencialidade,</h3>
            <h4>não podemos divulgar projetos realizados à terceiros</h4>
        </div>
    </div>
  )
}
