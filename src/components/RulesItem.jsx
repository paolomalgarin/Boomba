import { useState } from "react";
import "../style/variables.css";
import "../style/RulesItem.css";

function RulesItem({ id }) {

    return (
        <div className="RulesItem" id={id}>
            <h2 className="title">REGOLE</h2>
            <ul className="rules-container">
                <li>Alcune caselle contengono una mina, mentre altre no</li>
                <li>Il giocatore deve individuare le caselle che contengono le mine posizionandoci una bandiera</li>
                <li>Il giocatore deve anche scoprire le caselle che non contengono le mine</li>
                <li>Se il giocatore scopre la casella con la mina, perde</li>
                <li>Se il giocatore mette ogni bandierina sopra una mina, vince</li>
            </ul>
        </div>
    )
}

export default RulesItem;