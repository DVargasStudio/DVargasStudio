import './packs.scss';

import basicoIcon from './../../assets/svgs/Basico-Icon.svg'
import avancadoIcon from './../../assets/svgs/Avancado-Icon.svg'
import supremoIcon from './../../assets/svgs/Supremo-Icon.svg'

export default function Packs() {
  return (
    <div id="Packs">
      <h1>Pacotes</h1>
      <div class="Packs-Start">
        <div>
          <img src={basicoIcon} alt="basico icon" />
          <h3 id="Packs-Basic" className="Packs-Button">Básico</h3>
        </div>
        <div>
          <img src={avancadoIcon} alt="avancado icon" />
          <h3 id="Packs-Advanced" className="Packs-Button">Avançado</h3>
          </div>
        <div>
          <img src={supremoIcon} alt="supremo icon" />
          <h3 id="Packs-Supreme" className="Packs-Button">Supremo</h3>
          </div>
      </div>
      <div class="Packs-Standard"></div>
    </div>
  )
}
