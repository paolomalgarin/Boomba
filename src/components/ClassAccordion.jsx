import { useState } from "react";
import "../style/variables.css";
import "../style/ClassAccordion.css";
import AttributesAccordion from "./AttributesAccordion";
import MethodsAccordion from "./MethodsAccordion";

function ClassAccordion({ data }) {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className="ClassAccordion">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <span className="keyWord">class </span>{data.class}
                <pre className="keyWord">{isActive ? " >" : " <"}</pre>
            </div>
            <div className={`accordion-wrapper${!isActive ? " unactive" : ""}`}>
                <div className="accordion-content">
                    {data.description}
                </div>
                <AttributesAccordion data={data.attributes} />
                {
                    data.isMethods &&
                    <>
                        {
                            data.methods
                                .map((method) => (
                                    <MethodsAccordion data={method} key={method.id} />
                                ))
                        }
                    </>
                }
            </div>
        </div>
    )
}

export default ClassAccordion;