import logo from './logo.svg';
import './App.css';
import {List} from "./components/List";
import {NavLink, Routes, Route} from "react-router-dom";
import {Create} from "./components/Create";

function App() {
  return (
        <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/create'>Create</NavLink>
            <Routes>
                <Route path="/" element={<List />}></Route>
                <Route path="/create" element={<Create />}></Route>
            </Routes>
        </>
    );
}

export default App;
