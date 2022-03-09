import './services.scss';
import border1 from './../../../assets/svgs/Border1.svg';
import border2 from './../../../assets/svgs/Border2.svg';

export default function Services() {
  return (
    <div id="Servicos">
        <img src={border1} alt="" className="Services-Border"/>
        <div className="Services-Content">
            <h1>Nossos Serviços</h1>
            <div className="Services-Content-Text">  
                <p className="Services-Text-Left">Desenvolvimento de softwares / Games NFT / Outros</p>
                <p className="Services-Text-Right">Animação / Design / Audio Visual</p>  
                <p className="Services-Text-Left2">Gerenciamento de Google Ads / Facebook / Outros</p>              
            </div>
            <a href="#Contato"><h4 className='Services-Button'>ADAPTE A SUA DEMANDA</h4></a>
        </div>
        <img src={border2} alt="" className="Services-Border2"/>
    </div>
  )
}
