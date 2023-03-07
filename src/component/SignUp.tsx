import {ChangeEvent, useState} from "react";
import "./SignUp.css";

export default function SignUp() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function handleUsernameChange(e: ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }

    return (
        <>
            <br/>
            <form className={"signup-form"}>
                <label>
                    Username:
                    <input type={"text"} value={username} onChange={handleUsernameChange}/>
                </label>
                <label>
                    Password:
                    <input type={"password"} value={password} onChange={handlePasswordChange}/>
                </label>
                <button type={"submit"}>Sign Me Up</button>
            </form>
        </>
    )
}
