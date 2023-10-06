import React from "react";
import {NavLink} from "react-router-dom";

export function Home() {
    return (
        <>
            <h1>User List</h1>
            <NavLink to="/list" className="btn btn-primary">UserList</NavLink>
        </>
    );
}