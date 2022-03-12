import './portfolioPages.scss';

import ReactPlayer from "react-player";
import {Helmet} from 'react-helmet-async';

import Header from "./../../components/header/Header"
import video from './../../assets/videos/IdadeMedia.mp4'

import imgCover from './../../assets/imgs/DiaADiaIdadeMediaCover.png'
import afterEffectsLogo from './../../assets/imgs/AfterEffectsLogo.png'
import premiereLogo from './../../assets/imgs/PremiereLogo.png'
import kritaLogo from './../../assets/imgs/KritaLogo.png'
import reaperLogo from './../../assets/imgs/ReaperLogo.png'


export default function IdadeMedia({refHeader}) {
  return (
    <div className="PortfolioPages">

        <Helmet>
          <title>Dia a Dia na Idade Média</title>
          <meta name="description" content="Walter é um cidadão comum da idade média nos ajudando a entender como era o dia a dia de uma das épocas mais icónicas da humanidade..."/>
          <link rel="canonical" href="/Portfolio/Dia-a-Dia-Idade-Media" />
        </Helmet>

        <Header title="Dia a Dia na Idade Média" refHeader={refHeader}/>
        <h2>Sobre o Projeto</h2>
      <div className="PortfolioPages-Start">
        <p className="PortfolioPages-Intro">Walter é um cidadão comum da idade média nos ajudando a entender como era o dia a dia de uma das épocas mais icónicas da humanidade, prepare a pipoca para maratonar todos os episódios deste maravilhoso stand-up em forma de documentario</p>
        <div className='PortfolioPages-Img'>
          <img src={imgCover} alt="Dia a Dia na idade média Cover" />
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
