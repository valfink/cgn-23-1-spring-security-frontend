import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

type User = {
    username: string,
    id: string,
    role: string
}

export default function useAuth(redirectToSignIn?: boolean) {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();
    const {pathname} = useLocation();

    useEffect(() => {
        axios.get("/api/users/me")
            .then(res => {
                setUser(res.data);
            })
            .catch(e => {
                if (e.response.status === 401 && redirectToSignIn){
                    window.sessionStorage.setItem("signInRedirect", pathname || "/");
                    navigate("/sign-in");
                }
            })
    }, [pathname, navigate, redirectToSignIn]);

    return user;
}
