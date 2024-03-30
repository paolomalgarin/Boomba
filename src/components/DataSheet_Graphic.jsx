import { useState } from "react";
import "../style/variables.css";
import "../style/DataSheet_Graphic.css";
import ClassAccordion from "./ClassAccordion"

function DataSheet_Graphic() {

    const graphicClasses = [
        {
            id: 0,
            class: "ScopriCasellaThr",
            description: "Classe che scopre le caselle dell **jframe[][]**",
            attributes: [
                { d: "campo: il campo da considerare (è statico)", id: 0 },
                { d: "p: la posizione della casella da scoprire", id: 1 },
            ],
            isMethods: true,
            methods: [
                {
                    id: 0,
                    isPublic: true,
                    type: "",
                    name: "ScopriCasellaThr",
                    params: [
                        { id: 0, type: "CampoMinato", name: "campo" },
                        { id: 1, type: "Punto", name: "p" },
                    ],
                    description: "Costruttore che inizializza il campo, e il punto da scoprire (da utilizzare una volta solo)",
                },
                {
                    id: 1,
                    isPublic: true,
                    type: "",
                    name: "ScopriCasellaThr",
                    params: [
                        { id: 0, type: "Punto", name: "p" },
                    ],
                    description: "Costruttore che inizializza il punto da scoprire",
                },
                {
                    id: 2,
                    isPublic: true,
                    type: "void",
                    name: "run",
                    params: [
                        { id: 0, type: "", name: "" },
                    ],
                    description: "Metodo che scopre una casella e se la casella era vuota crea un nuovo ScopriCasellaThr e lo avvia",
                },
            ],
        },
    ];

    return (
        <div className="DataSheet_Graphic">
            <h2 className="title">DATASHEET - GRAPHIC</h2>
            {
                graphicClasses
                    .map((classData) => (
                        <ClassAccordion data={classData} key={classData.id} />
                    ))
            }
        </div>
    )
}

export default DataSheet_Graphic;