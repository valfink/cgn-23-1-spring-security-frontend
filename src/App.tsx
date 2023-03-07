import React from 'react';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import axios from "axios";
import Cookies from "js-cookie";

axios.interceptors.request.use(config => {
    if (["put", "post", "delete"].includes(config.method || "")) {
        return fetch("/api/csrf")
            .then(() => {
            config.headers["X-XSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");
            return config;
        });
    } else {
        return config;
    }
}, error => Promise.reject(error));

function App() {
  return (
    <div className="App">
        <nav>
            <li><Link to={"/sign-up"}>Sign up</Link></li>
            <li><Link to={"/login"}>Login</Link></li>
        </nav><br/>
      <Routes>
        <Route path={"/sign-up"} element={<SignUp />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
