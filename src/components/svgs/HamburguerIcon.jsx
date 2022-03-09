import './svgs.scss';

export default function HamburguerIcon({menuOpen, changeColor}, props) {
  
	const icon1 = "M540,0C241.8,0,0,241.8,0,540s241.8,540,540,540s540-241.8,540-540S838.2,0,540,0z M875.3,786.9c0,6.6-5.4,12-12,12H583.1 h-75H216.7c-6.6,0-12-5.4-12-12v-81.4c0-6.6,5.4-12,12-12h291.4h71.6h283.6c6.6,0,12,5.4,12,12V786.9z M875.3,599.6 c0,6.6-5.4,12-12,12H216.7c-6.6,0-12-5.4-12-12v-81.4c0-6.6,5.4-12,12-12h646.6c6.6,0,12,5.4,12,12V599.6z M875.3,412.4 c0,6.6-5.4,12-12,12H567.2h-50H216.7c-6.6,0-12-5.4-12-12V331c0-6.6,5.4-12,12-12h306.2h36.4h304c6.6,0,12,5.4,12,12V412.4z";
    const icon2 = "M540,0C241.8,0,0,241.8,0,540s241.8,540,540,540s540-241.8,540-540S838.2,0,540,0z M782.1,857.2c-3.8,3.7-6.4,6-12,12 L542.7,643l-3.5,0.4L303,869.2c-4.4-5.3-10.4-7.7-12-12l-71.1-70.3c6.2-7.5,6.2-7.5,12-12l208.9-223.2h195l209.7,216.8 c1.7,3.4,6.7,5.5,12,12L782.1,857.2z M205,611.1c0,0.3,0.2,0.5-0.1,0.5h-0.1c-0.3,0-0.1-0.2-0.1-0.5V506.7c0-0.3-0.3-0.5,0-0.5h0.2 c0.3,0,0,0.2,0,0.5V611.1z M857.5,333.5c-6.2,4.7-5.2,6.4-12,12L635.8,551.7h-195l-201-219.7c-4.4-4.4-7.3-6.9-12-12l72.8-65.8 c5.2-5.9,5.2-5.9,12-12l224.7,214.3l4.6,0.2l235.1-220.5c4,4.3,7.3,7.7,12,12L857.5,333.5z";

  return (
    <div>
        <svg className={"Svgs " + (changeColor && "ChangeColor")} x="0px" y="0px" viewBox="0 0 1080 1080" height="1.4em">
			<g>
		    	<path d={menuOpen ? icon2 : icon1} fill={props.fill}/>
			</g>
        </svg>
    </div>
  )
}
