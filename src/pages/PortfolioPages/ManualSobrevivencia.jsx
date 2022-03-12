import './portfolioPages.scss';

import ReactPlayer from "react-player";
import {Helmet} from 'react-helmet-async';

import Header from "./../../components/header/Header"
import video from './../../assets/videos/ManualSobrevivencia.mp4'

import imgCover from './../../assets/imgs/ManualSobrevivenciaCover.png'
import afterEffectsLogo from './../../assets/imgs/AfterEffectsLogo.png'
import premiereLogo from './../../assets/imgs/PremiereLogo.png'
import kritaLogo from './../../assets/imgs/KritaLogo.png'
import reaperLogo from './../../assets/imgs/ReaperLogo.png'

export default function ManualSobrevivencia({refHeader}) {
  return (
    <div className="PortfolioPages">
        <Helmet>
          <title>Manual de Ultra Sobrevivência</title>
          <meta name="description" content="O especialista em Ultra sobrevivência Raskonikov é o mais novo contratado da D'Vargas e já chegou mostrando a que veio..."/>
          <link rel="canonical" href="/Portfolio/Manual-do-Sobrevivente"/>
        </Helmet>

        <Header title="Manual de Ultra Sobrevivência" refHeader={refHeader}/>
        <h2>Sobre o Projeto</h2>
      <div className="PortfolioPages-Start">
        <p className="PortfolioPages-Intro">O especialista em Ultra sobrevivência Raskonikov é o mais novo contratado da D'Vargas e já chegou mostrando a que veio, topando qualquer parada, nos territórios mais mortais da terra! Aperte os sintos e faça o suco de maracujá porque é adrenalina pura Ultra sobreviver a tudo!</p>
        <div className='PortfolioPages-Img'>
          <img src={imgCover} alt="Manual de Ultra Sobrevivência Cover" />
        </div>
      </div>
      <h2>Ferramentas</h2>
        <div className='PortfolioPages-Tools'>
          <div  className='PortfolioPages-Tools-Imgs'>
            <img src={afterEffectsLogo} alt="After Effects Logo" />
            <img src={premiereLogo} alt="Premiere Logo" />
            <img src={kritaLogo} alt="Krita logo" />
            <img src={reaperLogo} alt="Reaper logo" />
          </div>
          <p>As ferramentas utilizadas para esse projeto foram o Krita, para a criação da arte, o Premiere e o After Effects para o desenvolvimento da animação e o Reaper para a mixagem e edição sonora.</p>
        </div>

      <h2>Video</h2>
           <ReactPlayer url={video} width="60%" height="60%" pip={true} controls={true} className="PortfolioPages-Video"/>
    </div>
  )
}
