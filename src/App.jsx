import React from "react";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./components/Navbar";
import Home from "./components/Home";
import MyFooter from "./components/MyFooter";


export default function App() {
    return (
        <div>
            <MyNavbar />
            <Home />
            <MyFooter/>
        </div>
    )
}