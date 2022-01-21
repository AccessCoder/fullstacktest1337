import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {postLogin, TOKEN_STORAGE_KEY} from "../Service/ShoppinhItem-Service";
import LoginData from "../Model/LoginData";
import {Link} from "react-router-dom";


export default function LoginElement() {

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const login = () => {
        const login: LoginData = {name: userName, password: userPassword}
        postLogin(login)
            .then(response => localStorage.setItem(TOKEN_STORAGE_KEY, response.data))
            .catch(error => console.error(error))
    }

    return (
        <div className={"loginElements"}>
            <TextField variant="outlined" label="Username" type="username" value={userName}
                       onChange={(e) => setUserName(e.target.value)}/>
            <TextField variant="filled" label="Password" type="password" value={userPassword}
                       onChange={(e) => setUserPassword(e.target.value)}/>
            <Button onClick={() => login()} variant="outlined">Login</Button>
            <Link to="/">
                <Button variant="outlined">MainPage</Button>
            </Link>
        </div>
    )
}