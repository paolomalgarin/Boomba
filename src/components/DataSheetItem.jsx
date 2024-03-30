import { useState } from "react";
import "../style/variables.css";
import "../style/DataSheetItem.css";
import DataSheet_Logic from "./DataSheet_Logic"
import DataSheet_Graphic from "./DataSheet_Graphic"

function DataSheetItem({ id }) {

    const [part, setPart] = useState(true);  //true = patre logica, false = parte grafica

    const handleClick = () => {
        setPart(!part);
    }

    return (
        <div className="DataSheetItem">
            <label htmlFor="switchDataSheet" className={part ? "gray" : "brown"} id={id}>{part ? "PARTE LOGICA" : "PARTE GRAFICA"}</label>
            <input type="checkbox" id="switchDataSheet" onClick={handleClick} />
            {
                part ? <DataSheet_Logic /> : <DataSheet_Graphic />
            }
        </div>
    )
}

export default DataSheetItem;