import './about.scss';
import image from './../../assets/imgs/Bodelé-1.png'

export default function About() {
  return (
    <div id="About">
        <h1 id="About-Title">Sobre Nós</h1>
        <div class="About-Content">
            <img src={image} alt="Bodelé" class="About-Image"/>
            <p class="About-Text">Somos uma produtora digital focada em realizar sonhos. Desde a elaboração do briefing até a estratégia de marketing, a D’Vargas pode lhe atender! Nossa equipe composta por 27 profissionais dentre roteiristas, desenvolvedores das mais diversas tecnologias, gestores de tráfego e videomakers acompanhará sua ideia desde a gênese ao sucesso com louvor!  </p>
        </div>
    </div>
  )
}
