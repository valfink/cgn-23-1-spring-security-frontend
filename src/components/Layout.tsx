import React, {ReactNode} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";

type LayoutProps = {
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {
    const user = useAuth();
    const {pathname} = useLocation();
    const navigate = useNavigate();

    function handleLogoutClick() {
        axios.post("/api/users/logout")
            .then(() => {
                window.sessionStorage.setItem("signInRedirect", pathname);
                navigate("/login");
            })
            .catch(console.error);
    }

    return (
        <>
            <nav>
                {!user && <><li><Link to={"/sign-up"}>Sign up</Link></li>
                    <li><Link to={"/login"}>Login</Link></li></>}
                <li><Link to={"/protected"}>Protected Content</Link></li>
                <li><Link to={"/mixed"}>Mixed Content</Link></li>
                {user && <li><Link to={"#"} onClick={handleLogoutClick}>Logout</Link></li>}
            </nav><br/>
            <main>
                {props.children}
            </main>
        </>
    );
}