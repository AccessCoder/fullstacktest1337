import LoginElement from "../Component/LoginElement";
import "./LoginPage.css"

export default function LoginPage() {
    return (
        <div className={"loginWrap"}>
            <div className={"loginElements"}>
                <LoginElement />
            </div>
        </div>

    )
}