import { useState } from "react";
import "../style/variables.css";
import "../style/MethodsAccordion.css";

function MethodsAccordion({ data }) {

    const [isActive, setIsActive] = useState(false);
    console.log(data.params.length);

    return (
        <div className="MethodsAccordion">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <span className="keyWord">{data.isPublic ? "public" : "private"} {data.type} </span> {data.name}(
                {
                    data.params
                        .map((par) => (
                            <span className="keyWord" key={par.id}>{par.type} {par.name}{(par.id < data.params.length - 1) ? ", " : ""}</span>
                        ))
                }
                )
                <pre className="keyWord">{isActive ? " >" : " <"}</pre>
            </div>
            <div className={`accordion-wrapper${!isActive ? " unactive" : ""}`}>
                <div className="accordion-content">
                    {data.description}
                </div>
            </div>
        </div>
    )
}

export default MethodsAccordion;