import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import axios from "axios";
import Cookies from "js-cookie";
import ProtectedContent from "./components/ProtectedContent";
import MixedProtectedContent from "./components/MixedProtectedContent";

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
      <Routes>
        <Route path={"/"} element={<MixedProtectedContent />} />
        <Route path={"/sign-up"} element={<SignUp />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/protected"} element={<ProtectedContent />} />
        <Route path={"/mixed"} element={<MixedProtectedContent />} />
      </Routes>
    </div>
  );
}

export default App;
