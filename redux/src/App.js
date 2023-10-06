import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import React from "react";
import {NotFound} from "./components/NotFound";
import {Home} from "./components/Home";
import UserList from "./components/UserList";


function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/list" element={<UserList/>}/>
          <Route path="*" element={NotFound}/>
        </Routes>
      </>
  );
}

export default App;