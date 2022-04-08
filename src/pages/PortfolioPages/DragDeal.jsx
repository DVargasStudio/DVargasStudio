import './portfolioPages.scss';

import ReactPlayer from "react-player";
import {Helmet} from 'react-helmet-async';

import Header from "./../../components/header/Header"

import video from './../../assets/videos/DragDeal.mp4'

import imgCover from './../../assets/imgs/DragDealCover.png'
import unityLogo from './../../assets/imgs/UnityLogo.png'
import ccLogo from './../../assets/imgs/CCLogo.png'
import mayaLogo from './../../assets/imgs/MayaLogo.png'
import reaperLogo from './../../assets/imgs/ReaperLogo.png'


export default function DragDeal({refHeader}) {
  return (
    <div className="PortfolioPages">

        <Helmet>
          <title>Drag Deal</title>
          <meta name="description" content="Monte sua drag, batalhe em varios mini-games e ainda produza suas próprias peças para comercializar! Tudo isso em Drag Deal..."/>
          <link rel="canonical" href="/Portfolio/Drag-Deal" />
        </Helmet>

        <Header title="Drag Deal" subtitle="EM DESENVOLVIMENTO" refHeader={refHeader}/>
        <h2>Sobre o Projeto</h2>
      <div className="PortfolioPages-Start">
        <p className="PortfolioPages-Intro">Monte sua drag, batalhe em varios mini-games e ainda produza suas próprias peças para comercializar! Tudo isso em Drag Deal, direto da Steam, junto com seus amigos as baladas mais cobiçadas estão a sua espera!</p>
        <div className='PortfolioPages-Img'>
          <img src={imgCover} alt="Dia a Dia na idade média Cover" />
        </div>
      </div>
      <h2>Ferramentas</h2>
        <div className='PortfolioPages-Tools'>
          <div  className='PortfolioPages-Tools-Imgs'>
            <img src={unityLogo} alt="Unity Logo" />
            <img src={ccLogo} alt="CC Logo" />
            <img src={mayaLogo} alt="Maya logo" />
            <img src={reaperLogo} alt="Reaper logo" />
          </div>
          <p>As ferramentas que estão sendo utilizadas para esse projeto foram o Unity como game engine, o Character Creator para a criação das personagens, o Maya para a modelagem dos assets e o Reaper para a mixagem e edição sonora.</p>
        </div>

      <h2>Em Breve</h2>
      <ReactPlayer url={video}width="60%" height="60%" pip={true} controls={true} className="PortfolioPages-Video"/>
      <p className='Center'>Para saber mais, clique no botão abaixo</p>
      <a href="https://www.instagram.com/dragdealgame/" target="_blank" rel="noreferrer"><h4 className='PortfolioPages-Button'>Ver Mais</h4></a>
    </div>
  )
}
