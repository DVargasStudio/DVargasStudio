import './navigation.scss';

export default function Navigation({menuOpen,SetMenuOpen}) {
    const PressMenu = () => SetMenuOpen(!menuOpen)
  return (
    <div id="Navigation" className={"" + (menuOpen && "Active")}>
        <ul>
            <li><a href="/DVargasStudio/#Cover" onClick={PressMenu}><h3>Home</h3></a></li>
            <li><a href="/DVargasStudio/#About" onClick={PressMenu}><h3>Sobre Nós</h3></a></li>
            <li><a href="/DVargasStudio/#Services" onClick={PressMenu}><h3>Serviços</h3></a></li>
            <li><a href="/DVargasStudio/#Packs" onClick={PressMenu}><h3>Pacotes</h3></a></li>
            <li><a href="/DVargasStudio/#Contact" onClick={PressMenu}><h3>Contatos</h3></a></li>
        </ul>
    </div>
  )
}
