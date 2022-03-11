import './menu.scss';
import FacebookI from "./../../components/svgs/FacebookIcon";
import InstagramI from "./../../components/svgs/InstagramIcon";
import WhatsappI from "./../../components/svgs/WhatsappIcon";
import YoutubeI from "./../../components/svgs/YoutubeIcon";
import Logo from "./../../components/svgs/Logo";
import HamburguerI from "./../../components/svgs/HamburguerIcon";

import { Link } from 'react-router-dom';


export default function Menu ({menuOpen,SetMenuOpen, inHomePage, changeColor}) {
  return (
    <div id="Menu" className={"" + (menuOpen && "Active")}>
        <div className="Menu-Wrapper">
            <div className="Menu-Logo">

              {inHomePage ? <a href="/#Home"><Logo fill="#fcfcfc" changeColor={changeColor} /></a> : <Link to="/#Home"><Logo fill="#fcfcfc" changeColor={changeColor} /></Link> }  
            </div>
            <div className="Menu-Bar">
              <a href="https://www.instagram.com/dvargas_studio/" target="_blank" rel="noreferrer"><InstagramI fill="#fcfcfc" changeColor={changeColor || menuOpen}/></a>
              <a href="https://www.facebook.com/DonnVargasStudio" target="_blank" rel="noreferrer"><FacebookI fill="#fcfcfc" changeColor={changeColor || menuOpen} /></a>
              <a href="https://www.youtube.com/channel/UC1NlpDnyr3Sf6BFDTHuspWA" target="_blank" rel="noreferrer"><YoutubeI fill="#fcfcfc" changeColor={changeColor || menuOpen} /></a>
              <a href="https://wa.me/5524992482724" target="_blank" rel="noreferrer"><WhatsappI fill="#fcfcfc" changeColor={changeColor || menuOpen} /></a>
              <div onClick={()=> SetMenuOpen(!menuOpen) }><HamburguerI fill="#fcfcfc" menuOpen={menuOpen} changeColor={changeColor || menuOpen}/></div>
            </div>
        </div>
    </div>
  )
}
