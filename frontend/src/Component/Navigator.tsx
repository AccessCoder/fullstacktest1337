import {Link} from "react-router-dom";
import "./Navigator.css"

export default function Navigator(){
    return(
        <div className={"navElements"}>
            <Link to={"/"}>MainPage</Link>
            <Link to={"/einkaufsliste"}>Einkaufs Liste</Link>
            <Link to={"/heatitup"}>Heat it Up!</Link>
        </div>
    )
}