import { useState } from "react";
import "../style/variables.css";
import "../style/Footer.css";

function Footer({ attributions, id }) {

    return (
        <footer className="footer" id={id}>
            <div className="logo">
                Boomba
            </div>
            <hr />
            <div className="copiright">
                © 2024 GruppoBoomba. Tutti i diritti riservati.<br />
                <strong>MADE BY Paolo Malgarin.</strong>
            </div>
            <div className="attribution">
                {
                    attributions
                        .map((attr) => (
                            <a href={attr.url} target="_blank" key={attr.id}>
                                {attr.description}
                            </a>
                        ))

                }
            </div>
        </footer>
    )
}

export default Footer;