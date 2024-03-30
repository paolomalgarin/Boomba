import { useState } from "react";
import "../style/variables.css";
import "../style/ItemCard.css";

function ItemCard({ data }) {

    return (
        <div className="ItemCard">
            <img src={data.imgURL} alt={data.imgAlt} />
            <p className="description">
                <h2 className="title">
                    {data.name}
                </h2>
                {data.desc}
            </p>
        </div>
    )
}

export default ItemCard;