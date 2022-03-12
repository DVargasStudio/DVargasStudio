import './portfolioPages.scss';

import ReactPlayer from "react-player";
import {Helmet} from 'react-helmet-async'

import Header from './../../components/header/Header';

import video from './../../assets/videos/DanDansGarden.mp4'

import imgCover from './../../assets/imgs/DanDansGardenCover.png'
import unityLogo from './../../assets/imgs/UnityLogo.png'
import premiereLogo from './../../assets/imgs/PremiereLogo.png'
import photoshopLogo from './../../assets/imgs/PhotoshopLogo.png'
import reaperLogo from './../../assets/imgs/ReaperLogo.png'

export default function DanDansGarden({refHeader}) {
  return (
    <div className="PortfolioPages">

        <Helmet>
          <title>DanDan's Garden</title>
          <meta name="description" content="O porteiro mais estressado do mundo agora tem o proprio jogo e você claramente não vai querer enfrenta-lo. Já disponivel na Play Store..."/>
          <link rel="canonical" href="/Portfolio/DanDans-Garden" />
        </Helmet>

        <Header title="DanDan's Garden" refHeader={refHeader}/>
        <h2>Sobre o Projeto</h2>
      <div className="PortfolioPages-Start">
        <p className="PortfolioPages-Intro">O porteiro mais estressado do mundo agora tem o proprio jogo e você claramente não vai querer enfrenta-lo. Já disponivel na Play Store, o nosso Dandan's Garden é de tirar o folego!</p>
        <div className='PortfolioPages-Img'>
          <img src={imgCover} alt="DanDan's Garden Cover" />
        </div>
      </div>
      <h2>Ferramentas</h2>
        <div className='PortfolioPages-Tools'>
          <div  className='PortfolioPages-Tools-Imgs'>
            <img src={unityLogo} alt="Unity Logo" />
            <img src={photoshopLogo} alt="Photoshop logo" />
            <img src={premiereLogo} alt="Premiere Logo" />    
            <img src={reaperLogo} alt="Reaper logo" />
          </div>
          <p>As ferramentas utilizadas para esse projeto foram o Unity como game engine, o Photoshop para a criação dos assets, o Premiere para edição de vídeo e o Reaper para a mixagem e edição sonora.</p>
        </div>

      <h2>Video</h2>
           <ReactPlayer url={video} width={"calc(100px + 35%)"} height="35%" pip={true} controls={true} className="PortfolioPages-Video"/>
    </div>
  )
}
