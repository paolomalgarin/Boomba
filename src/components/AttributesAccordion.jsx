import { useState } from "react";
import "../style/variables.css";
import "../style/AttributesAccordion.css";

function AttributesAccordion({ data }) {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className="AttributesAccordion">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <span className="keyWord">Attributi</span>
                <pre className={`keyWord statusArrow ${isActive && "downArrow"}`}>{">"}</pre>
            </div>
            <div className={`accordion-wrapper${!isActive ? " unactive" : ""}`}>
                <div className="accordion-content">
                    {
                        data.map((attr) => (
                            <>
                                <span key={attr.id}>{attr.d}</span><br />
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AttributesAccordion;