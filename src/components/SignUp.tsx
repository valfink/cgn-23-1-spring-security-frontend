import {ChangeEvent, FormEvent, useState} from "react";
import "./SignUp.css";
import axios from "axios";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

export default function SignUp() {
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
        return axios.post("/api/users", {username, password}, {
            headers: {"X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN")}
        })
            .then(() => {
                navigate("/login");
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
                <h2>Sign Up</h2>
                {formError && <div className={"form-error"}>Error: {formError}</div>}
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
