import './menu.scss';
import logo from './../../assets/svgs/Logo.svg';
import whatsIcon from './../../assets/svgs/Whatsapp-Icon.svg'
import youtubeIcon from './../../assets/svgs/Youtube-Icon.svg'
import instaIcon from './../../assets/svgs/Instagram-Icon.svg'
import facebookIcon from './../../assets/svgs/Facebook-Icon.svg'


export default function Menu ({menuOpen,SetMenuOpen}) {
  return (
    <div id="Menu" className={"" + (menuOpen && "Active")}>
        <div class="Menu-Wrapper">
            <div class="Menu-Logo">
                <a href="#Cover"><img src={logo} alt="logo" /></a>
            </div>
            <div class="Menu-Bar">
              <a href="https://www.instagram.com/dvargas_studio/" target="_blank" rel="noreferrer"><img src={instaIcon} alt="instagram Icon" /></a>
              <a href="https://www.facebook.com/DonnVargasStudio" target="_blank" rel="noreferrer"><img src={facebookIcon} alt="facebook Icon" /></a>
              <a href="https://www.youtube.com/channel/UC1NlpDnyr3Sf6BFDTHuspWA" target="_blank" rel="noreferrer"><img src={youtubeIcon} alt="youtube Icon" /></a>
              <a href="https://wa.me/5524992482724" target="_blank" rel="noreferrer"><img src={whatsIcon} alt="whatsapp Icon" /></a>
              <div className="Menu-Hamburger" onClick={()=> SetMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
        </div>
    </div>
  )
}
