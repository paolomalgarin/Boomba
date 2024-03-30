import { useState } from "react";
import "../style/variables.css";
import "../style/Hero.css";

function Hero({ imgURL, title, id }) {

    return (
        <div className="Hero" id={id}>
            <img src={imgURL} alt="hero" />
            <h1 className="title">{title}</h1>
        </div>
    )
}

export default Hero;