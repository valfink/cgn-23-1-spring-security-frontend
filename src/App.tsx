import React from 'react';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import SignUp from "./component/SignUp";

function App() {
  return (
    <div className="App">
        <Link to={"/sign-up"}>Sign up</Link><br/>
      <Routes>
        <Route path={"/sign-up"} element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
