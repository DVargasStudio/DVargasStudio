import './footer.scss';
import whatsIcon from './../../assets/svgs/Whatsapp-Icon-W.svg'
import youtubeIcon from './../../assets/svgs/Youtube-Icon-W.svg'
import instaIcon from './../../assets/svgs/Instagram-Icon-W.svg'
import facebookIcon from './../../assets/svgs/Facebook-Icon-W.svg'

export default function Footer() {
  return (
    <div id="Footer">
      <p className="Footer-White-Text">D'Vargas Studio. Todos os direitos Reservados</p>
      <div className="Footer-Bar">
        <a href="https://www.instagram.com/dvargas_studio/" target="_blank" rel="noreferrer"><img src={instaIcon} alt="instagram Icon" /></a>
        <a href="https://www.facebook.com/DonnVargasStudio" target="_blank" rel="noreferrer"><img src={facebookIcon} alt="facebook Icon" /></a>
        <a href="https://www.youtube.com/channel/UC1NlpDnyr3Sf6BFDTHuspWA" target="_blank" rel="noreferrer"><img src={youtubeIcon} alt="youtube Icon" /></a>
        <a href="https://wa.me/5524992482724" target="_blank" rel="noreferrer"><img src={whatsIcon} alt="whatsapp Icon" /></a>
      </div>        
    </div>
  )
}
