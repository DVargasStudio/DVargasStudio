import './portfolioPages.scss';

import ReactPlayer from "react-player";
import {Helmet} from 'react-helmet-async';

import Header from './../../components/header/Header';

import video from './../../assets/videos/BodeleTheHomeless.mp4'

import imgCover from './../../assets/imgs/BodeleTheHomeless.png'
import unityLogo from './../../assets/imgs/UnityLogo.png'
import corelLogo from './../../assets/imgs/CorelDrawLogo.png'
import piskelLogo from './../../assets/imgs/PiskelLogo.png'
import reaperLogo from './../../assets/imgs/ReaperLogo.png'

export default function DanDansGarden({refHeader}) {
  return (
    <div className="PortfolioPages">

        <Helmet>
          <title>Bodelé the Homeless</title>
          <meta name="description" content="Acompanhe Bodelé pelos confins da terra em busca de almas perdidas na aventura mais louca do Homeless mais simpatico dos Games..."/>
          <link rel="canonical" href="/Portfolio/Bodele-the-Homeless" />
        </Helmet>

        <Header title="Bodelé the Homeless" refHeader={refHeader}/>
        <h2>Sobre o Projeto</h2>
      <div className="PortfolioPages-Start">
        <p className="PortfolioPages-Intro">Acompanhe Bodelé pelos confins da terra em busca de almas perdidas na aventura mais louca do Homeless mais simpatico dos Games, Bodelé the Homeless vai te prender em outra dimensão.</p>
        <div className='PortfolioPages-Img'>
          <img src={imgCover} alt="DanDan's Garden Cover" />
        </div>
      </div>
      <h2>Ferramentas</h2>
        <div className='PortfolioPages-Tools'>
          <div  className='PortfolioPages-Tools-Imgs'>
            <img src={unityLogo} alt="Unity Logo" />
            <img src={corelLogo} alt="Photoshop logo" />
            <img src={piskelLogo} alt="Premiere Logo" />    
            <img src={reaperLogo} alt="Reaper logo" />
          </div>
          <p>As ferramentas utilizadas para esse projeto foram o Unity como game engine, o CorelDraw e o Piskel para a criação dos assets, além do Reaper para a mixagem e edição sonora.</p>
        </div>

      <h2>Video</h2>
      <ReactPlayer url={video} width={"calc(100px + 35%)"} height="35%" pip={true} controls={true} className="PortfolioPages-Video"/>
      <p className='Center'>Para baixar o jogo, clique no botão abaixo</p>
      <a href="https://play.google.com/store/apps/details?id=com.DVargasStudios.BodeletheHomeless.InfinityRunner" target="_blank" rel="noreferrer"><h4 className='PortfolioPages-Button'>Ver Mais</h4></a>
    </div>
  )
}
