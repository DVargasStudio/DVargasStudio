import './portfolioItem.scss'

export default function PortfolioItem(props) {
  return (
    <div id="PortfolioItem" className={"" + (props.active && "Active")}>
        
        <div>
            <img src={props.img} alt="" className="PorfolioItem-Img"/>
            <img src={props.icon} alt="icon" className='PortfolioItem-Icon' />
        </div>
        <div className="PortfolioItem-Info">
            <h5>{props.title}</h5>
            <h6>{props.subtitle}</h6>
        </div>
        
    </div>
  )
}
