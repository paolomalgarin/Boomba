import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/variables.css";
import "../style/Navbar.css";

function Navbar({ logoURL, linkTitles }) {

    const [isDownloadOpened, setIsDownloadOpened] = useState(false);

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
                {/* accordion x download (fatto al volo) */}
                <li className="Accordion" key={-104}>
                    <div className="accordion-title" onClick={() => setIsDownloadOpened(!isDownloadOpened)}>
                        <span className="keyWord" style={{ textDecoration: isDownloadOpened ? "underline" : "" }}>DOWNLOAD</span>
                    </div>
                    <div className={`accordion-wrapper${!isDownloadOpened ? " unactive" : ""}`}>
                        <div className="accordion-content">
                            <a href="../../exe/Campo Minato 1.0.exe" download>download V1.0</a>
                            <a href="../../exe/Campo Minato.exe" download>download V1.1</a>
                        </div>
                    </div>
                </li>
            </ul>
        </header>

    )
}

export default Navbar;