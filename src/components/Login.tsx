import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function Login() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [formError, setFormError] = useState<string>("");
    const navigate = useNavigate();

    function handleUsernameChange(e: ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        return axios.post("/api/users/login", {}, {
            headers: {
                Authorization: `Basic ${window.btoa(`${username}:${password}`)}`
            }
        })
            .then(() => {
                const redirect = window.sessionStorage.getItem("signInRedirect") || "/";
                window.sessionStorage.removeItem("signInRedirect");
                navigate(redirect);
            })
            .catch(err => {
                console.error(err);
                setFormError(err.response.data.error);
            });
    }

    return (
        <>
            <br/>
            <form className={"signup-form"} onSubmit={handleSubmit}>
                <h2>Log In</h2>
                {formError && <div className={"form-error"}>Error: {formError}</div>}
                <label>
                    Username:
                    <input type={"text"} value={username} onChange={handleUsernameChange}/>
                </label>
                <label>
                    Password:
                    <input type={"password"} value={password} onChange={handlePasswordChange}/>
                </label>
                <button type={"submit"}>Log Me In</button>
            </form>
        </>
    )
}