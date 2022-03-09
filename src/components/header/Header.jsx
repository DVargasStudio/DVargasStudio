import './header.scss'

import border from './../../assets/svgs/Border2.svg';

export default function Header({refHeader, title, subtitle, subtitle2}) {
  return (
    <div id="Header" ref={refHeader}>
        <div className="Header-Content">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>{subtitle2}</p>
        </div>
        <img src={border} alt="" className="Header-Border"/>
    </div>
  )
}