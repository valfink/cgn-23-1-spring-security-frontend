import React from 'react';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import SignUp from "./component/SignUp";
import Login from "./component/Login";

function App() {
  return (
    <div className="App">
        <Link to={"/sign-up"}>Sign up</Link><br/>
      <Routes>
        <Route path={"/sign-up"} element={<SignUp />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
