import './navigation.scss';

import { Link } from 'react-router-dom';

export default function Navigation({menuOpen,SetMenuOpen}) {
    const PressMenu = () => SetMenuOpen(!menuOpen)
  return (
    <div id="Navigation" className={"" + (menuOpen && "Active")}>
        <ul>
            <li><a href="/#Cover" onClick={PressMenu}><h3>Home</h3></a></li>
            <li><a href="/#About" onClick={PressMenu}><h3>Sobre Nós</h3></a></li>
            <li><a href="/#Services" onClick={PressMenu}><h3>Serviços</h3></a></li>
            <li><a href="/#Packs" onClick={PressMenu}><h3>Pacotes</h3></a></li>
            <li><a href="/#Contact" onClick={PressMenu}><h3>Contatos</h3></a></li>
            <li><Link to="/Portfolio" onClick={PressMenu}><h3>Portfólio</h3></Link></li>
        </ul>
    </div>
  )
}
