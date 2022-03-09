import './navigation.scss';

import { Link } from 'react-router-dom';

export default function Navigation({menuOpen,SetMenuOpen}) {
    const PressMenu = () => SetMenuOpen(!menuOpen);
  return (
    <div id="Navigation" className={"" + (menuOpen && "Active")}>
        <ul>
            <li><a href="/#Home" onClick={PressMenu}><h3>Home</h3></a></li>
            <li><a href="/#Quem-Somos" onClick={PressMenu}><h3>Quem Somos</h3></a></li>
            <li><a href="/#Servicos" onClick={PressMenu}><h3>Serviços</h3></a></li>
            <li><Link to="/Portfolio" onClick={PressMenu}><h3>Portfólio</h3></Link></li>
            <li><a href="/#Pacotes" onClick={PressMenu}><h3>Pacotes</h3></a></li>
            <li><a href="/#Contato" onClick={PressMenu}><h3>Contatos</h3></a></li>
        </ul>
    </div>
  )
}
