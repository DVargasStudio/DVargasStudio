import './portfolioPages.scss';

import ReactPlayer from "react-player";
import {Helmet} from 'react-helmet-async';

import Header from './../../components/header/Header';
import video from './../../assets/videos/GoldenStars.mp4'

import imgCover from './../../assets/imgs/GoldenStars.png'
import JavaScriptLogo from './../../assets/imgs/JavaScriptLogo.png'
import premiereLogo from './../../assets/imgs/PremiereLogo.png'
import photoshopLogo from './../../assets/imgs/PhotoshopLogo.png'
import reaperLogo from './../../assets/imgs/ReaperLogo.png'

export default function GoldenStars({refHeader}) {
  return (
    <div className="PortfolioPages">

        <Helmet>
          <title>Golden Stars</title>
          <meta name="description" content="As maiores estrelas Teen, em sua intimidade, agora ao alcanse de um click. Acompanhe a carreira e a vida do seu artista favorito..."/>
          <link rel="canonical" href="/Portfolio/Golden-Stars" />
        </Helmet>

        <Header title="Golden Stars" refHeader={refHeader}/>
        <h2>Sobre o Projeto</h2>
      <div className="PortfolioPages-Start">
        <p className="PortfolioPages-Intro">As maiores estrelas Teen, em sua intimidade, agora ao alcanse de um click. Acompanhe a carreira e a vida do seu artista favorito e é claro as ultimas noticias do mundo pop.</p>
        <div className='PortfolioPages-Img'>
          <img src={imgCover} alt="Golden Star Cover" />
        </div>
      </div>
      <h2>Ferramentas</h2>
        <div className='PortfolioPages-Tools'>
          <div  className='PortfolioPages-Tools-Imgs'>
            <img src={JavaScriptLogo} alt="JavaScript Logo" />
            <img src={photoshopLogo} alt="Photoshop logo" />
            <img src={premiereLogo} alt="Premiere Logo" />    
            <img src={reaperLogo} alt="Reaper logo" />
          </div>
          <p>As ferramentas utilizadas para esse projeto foram o JavaScript para a produção do App(Em Desenvolvimento), o Photoshop para criação e edição de imagens e fotos, o Premiere para edição de vídeo e o Reaper para a mixagem e edição sonora.</p>
        </div>

      <h2>Video</h2>
      <ReactPlayer url={video} width="60%" height="60%" pip={true} controls={true} className="PortfolioPages-Video"/>
      <p className='Center'>Para saber mais, clique no botão abaixo</p>
      <a href="https://www.youtube.com/channel/UCutfJRaolgaLihsyam2U4hw" target="_blank" rel="noreferrer"><h4 className='PortfolioPages-Button'>Ver Mais</h4></a>
    </div>
  )
}
