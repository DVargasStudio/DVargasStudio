import './packs.scss';

import { useState } from "react";

import basicoIcon from './../../assets/svgs/Basico-Icon.svg'
import avancadoIcon from './../../assets/svgs/Avancado-Icon.svg'
import supremoIcon from './../../assets/svgs/Supremo-Icon.svg'
import basicoIconW from './../../assets/svgs/Basico-Icon-W.svg'
import avancadoIconW from './../../assets/svgs/Avancado-Icon-W.svg'
import supremoIconW from './../../assets/svgs/Supremo-Icon-W.svg'

export default function Packs() {

  const [sliderPosition,SetSliderPosition ] = useState("Packs-1");

  return (
    <div id="Packs">
      <h1>Pacotes</h1>
      <div class="Packs-Start">
        <div>
          <img src={basicoIcon} alt="basico icon" />
          <h4 id="Packs-Basic" className="Packs-Button" onClick={()=>SetSliderPosition("Packs-1")}>Básico</h4>
        </div>
        <div>
          <img src={avancadoIcon} alt="avancado icon" />
          <h4 id="Packs-Advanced" className="Packs-Button" onClick={()=>SetSliderPosition("Packs-2")}>Avançado</h4>
          </div>
        <div>
          <img src={supremoIcon} alt="supremo icon" />
          <h4 id="Packs-Supreme" className="Packs-Button" onClick={()=>SetSliderPosition("Packs-3")}>Supremo</h4>
          </div>
      </div>
      <div class="Packs-Carousel">
        <div id="Packs-Inner" class={sliderPosition}>
          <div className="Packs-Content-Basic">
            <h1 class="Packs-Text-White">Básico</h1>
            <div class="Packs-Content-Flex">
              <img src={basicoIconW} alt="basico icon" />
              <p class="Packs-Text-White">Básico só no nome, o primeiro pacote da D’Vargas está longe de ser simplório. Desenvolvemos seu projeto desde o início junto com sua equipe, integrando e aplicando melhorias tecnologicas já testadas e em pleno funcionamento para seus clientes.<br/><br/>Seja games, animações de curta ou longa metragem, site ou até mesmo plataformas complexas, esse pacote engloba tudo!</p>
            </div>
            <h4 className="Packs-Text-White">Seu projeto digital irá sair do papel,<br/>nós damos vida ao que você pensar! </h4>
            <h4 className="Packs-Button">Veja Alguns Exemplos</h4>
          </div>

          <div className="Packs-Content-Advanced">
            <h1 class="Packs-Text-White">Avançado</h1>
            <div class="Packs-Content-Flex">
              <img src={avancadoIconW} alt="basico icon" />
              <p class="Packs-Text-White">Não só faremos o seu projeto como ajudareamos a levanta-lo do zero de acordo com as necessidades de seu público alvo. Utilizando estratégias de marketing desenvolvidas a partir de consultorias com nossos agentes, visamos o melhor desempenho para atingirmos o sucesso lado a lado!<br/><br/>Se precisar de suporte, esse pacote irá lhe atender.</p>
            </div>
            <h4 className="Packs-Text-White">Não basta apenas criar um projeto,<br/>Precisamos fazer ele vingar!</h4>
            <h4 className="Packs-Button Packs-Dark-Red-Button">Veja Alguns Exemplos</h4>
          </div>

          <div className="Packs-Content-Supreme">
            <h1 class="Packs-Text-White">Supremo</h1>
            <div class="Packs-Content-Flex">
              <img src={supremoIconW} alt="basico icon" />
              <p class="Packs-Text-White">Básico só no nome, o primeiro pacote da D’Vargas está longe de ser simplório. Desenvolvemos seu projeto desde o início junto com sua equipe, integrando e aplicando melhorias tecnologicas já testadas e em pleno funcionamento para seus clientes.<br/><br/>Seja games, animações de curta ou longa metragem, site ou até mesmo plataformas complexas, esse pacote engloba tudo!</p>
            </div>
            <h4 className="Packs-Text-White">Do zero ao negócio ideal,<br/>com todo o suporte para ele brilhar!</h4>
            <h4 className="Packs-Button">Veja Alguns Exemplos</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
