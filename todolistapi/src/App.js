import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS
import {Todo} from "./components/Todo";
import {NavLink,Route,Routes} from "react-router-dom";
import React from "react";
import {Dna} from "react-loader-spinner"
function App() {
  return (
      <>
          <Todo></Todo>
      </>
  );
}
export default App;
