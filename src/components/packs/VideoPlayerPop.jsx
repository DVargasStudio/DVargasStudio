import "./videoPlayerPop.scss";

import ReactPlayer from "react-player";

export default function VideoPlayerPop({videoPopUp,SetVideoPopUp, videoURL},) {
  return (
    <div id="VideoPlayerPop" className={"" + (videoPopUp && "Active")}>
        <div className="VideoPlayerPop-Background"  onClick={()=> SetVideoPopUp(false)}></div>
        <div className="VideoPlayerPop-Video">
            <ReactPlayer url={videoURL} playing={videoPopUp} width="100%" height="100%" pip={true} controls={true}/>
        </div>
    </div>
  )
}
