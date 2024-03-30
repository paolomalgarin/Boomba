import { useState } from "react";
import "../style/variables.css";
import "../style/ItemShowcase.css";
import ItemCard from "./ItemCard"

function ItemShowcase({ cards, title }) {

    return (
        <div className="ItemShowcase">
            <h2 className="title">{title ? title.toUpperCase() : ""}</h2>
            <div className="container">
                {
                    cards
                        .map((card) => (
                            <ItemCard data={card} key={card.id} />
                        ))
                }
            </div>
        </div>
    )
}

export default ItemShowcase;