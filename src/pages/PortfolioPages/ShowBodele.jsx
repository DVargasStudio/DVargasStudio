import './portfolioPages.scss';

import ReactPlayer from "react-player";
import {Helmet} from 'react-helmet-async';

import Header from "./../../components/header/Header"
import video from './../../assets/videos/ShowDoBodele.mp4'

import imgCover from './../../assets/imgs/ShowBodeleCover.png'
import premiereLogo from './../../assets/imgs/PremiereLogo.png'
import clipStudioLogo from './../../assets/imgs/ClipStudioLogo.png'
import reaperLogo from './../../assets/imgs/ReaperLogo.png'

export default function ShowBodele({refHeader}) {
  return (
    <div className="PortfolioPages">
        <Helmet>
          <title>Show do Bodelé</title>
          <meta name="description" content="O Homeless mais cobiçado de Holywood agora com seu proprio programa de TV e coordenando tudo, o show é dele e sempre vai ser..."/>
          <link rel="canonical" href="/Portfolio/Show-do-Bodele"/>
        </Helmet>

        <Header title="Show do Bodelé" refHeader={refHeader}/>
        <h2>Sobre o Projeto</h2>
      <div className="PortfolioPages-Start">
        <p className="PortfolioPages-Intro">O Homeless mais cobiçado de Holywood agora com seu proprio programa de TV e coordenando tudo, o show é dele e sempre vai ser. Venha dar gargalhadas com a voz de Michael Jackson... opsss... Do nosso Show do Bodelé</p>
        <div className='PortfolioPages-Img'>
          <img src={imgCover} alt="Show do Bodelé Cover" />
        </div>
      </div>
      <h2>Ferramentas</h2>
        <div className='PortfolioPages-Tools'>
          <div  className='PortfolioPages-Tools-Imgs'>
            <img src={premiereLogo} alt="Premiere Logo" />
            <img src={clipStudioLogo} alt="ClipStudio logo" />
            <img src={reaperLogo} alt="Reaper logo" />
          </div>
          <p>As ferramentas utilizadas para esse projeto foram o ClipStudio para a criação da arte e animação, o Premiere para a edição do vídeo e o Reaper para a mixagem e edição sonora.</p>
        </div>

      <h2>Video</h2>
           <ReactPlayer url={video} width="60%" height="60%" pip={true} controls={true} className="PortfolioPages-Video"/>
    </div>
  )
}
