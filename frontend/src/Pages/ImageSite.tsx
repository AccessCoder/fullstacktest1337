import Header from "../Component/Header";
import Navigator from "../Component/Navigator";
import gif from "../Pictures/9th Form.gif"

export default function ImageSite(){
    return(
        <div>
            <Header/>
            <Navigator/>
            <img src={gif} alt={"heatitup"}/>
        </div>
    )
}