import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/variables.css";
import "../style/Navbar.css";

function Navbar({ logoURL, linkTitles }) {

    const handleClick = () => {
        document.querySelector(".header #menu-BTN").checked = !document.querySelector(".header #menu-BTN").checked;
    }

    return (
        <header className="header">
            <a href="#home" className="logo"><img src={logoURL} alt="logo" /></a>
            <input className="menuBTN" id="menu-BTN" type="checkbox" />
            <label for="menu-BTN" className="menu_icon">
                <span className="nav_icon"></span>
            </label>
            <ul className="menu">
                {
                    linkTitles
                        .map((title) => (
                            <li key={title.id}><a href={title.link} onClick={handleClick}>{title.name}</a></li>
                        ))
                }
            </ul>
        </header>

    )
}

export default Navbar;