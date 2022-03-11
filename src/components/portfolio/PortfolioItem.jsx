import './portfolioItem.scss'

import { Link } from 'react-router-dom'

export default function PortfolioItem(props) {
  return (
    <div id="PortfolioItem" className={"" + (props.active && "Active")}>
      <Link to={props.link}>
        <div>
            <img src={props.img} alt="" className="PorfolioItem-Img"/>
            <img src={props.icon} alt="icon" className='PortfolioItem-Icon' />
        </div>
        <div className="PortfolioItem-Info">
            <h5>{props.title}</h5>
            <h6>{props.subtitle}</h6>
        </div>
      </Link>
    </div>
  )
}
