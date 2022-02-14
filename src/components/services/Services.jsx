import './services.scss';
import border1 from './../../assets/imgs/Border1.png';

export default function Services() {
  return (
    <div id="Services">
        <img src={border1} alt="" class="Services-Border"/>
        <div class="Services-Content">
            <h1>Nossos Serviços</h1>
            <div class="Services-Content-Text">  
                <p class="Services-Text-Left">Desenvolvimento de softwares / Games NFT / Outros</p>
                <p class="Services-Text-Right">Animação / Design / Audio Visual</p>  
                <p class="Services-Text-Left2">Gerenciamento de Google Ads / Facebook / Outros</p>              
            </div>
            <h3>ADAPTE A SUA DEMANDA</h3>
        </div>
        <div class="Services-Border2"></div>
    </div>
  )
}
