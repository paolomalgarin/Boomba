import { useState } from "react";
import "../style/variables.css";
import "../style/DataSheet_Graphic.css";
import ClassAccordion from "./ClassAccordion"

function DataSheet_Graphic() {

    const graphicClasses = [
        {
            id: 0.1,
            class: "Classifica",
            description: "Classe che estende JFrame e visualizza la classifica dei giocatori con il punteggio",
            attributes: [
                { d: "javax.swing.JTextArea classifica: area di testo per visualizzare i dati della classifica", id: 0 },
                { d: "javax.swing.JLabel player: etichetta che mostra il nome del giocatore", id: 1 },
                { d: "java.awt.Point mouseClickPoint: variabile che memorizza il punto di clic del mouse per il trascinamento della finestra.", id: 2 },
                { d: "int punteggio: variabile che tiene traccia del punteggio del giocatore", id: 3 },
            ],
            isMethods: true,
            methods: [
                {
                    id: 0,
                    isPublic: true,
                    type: "",
                    name: "Classifica",
                    params: [
                        { id: 0, type: "String", name: "name" },
                        { id: 1, type: "int", name: "x" },
                        { id: 2, type: "int", name: "y" },
                        { id: 3, type: "int", name: "height" },
                    ],
                    description: "Costruttore che inizializza la finestra Classifica con le impostazioni di dimensioni e posizione",
                },
                {
                    id: 1,
                    isPublic: true,
                    type: "void",
                    name: "initComponents",
                    params: [
                        { id: 0, type: "String", name: "name" },
                        { id: 1, type: "int", name: "x" },
                        { id: 2, type: "int", name: "y" },
                        { id: 3, type: "int", name: "height" }
                    ],
                    description: "Inizializza i componenti della finestra Classifica, impostando layout, colore di sfondo e listener per eventi di mouse",
                },
                {
                    id: 2,
                    isPublic: true,
                    type: "void",
                    name: "refresh",
                    params: [{}],
                    description: "Aggiorna la classifica con i dati prelevati dal file--> classifica.txt ",
                },
                {
                    id: 3,
                    isPublic: true,
                    type: "void",
                    name: "addListenerToAllComponents",
                    params: [
                        { id: 0, type: "java.awt.Container", name: "container" },
                        { id: 1, type: "Classifica", name: "frame" }
                    ],
                    description: "Aggiunge listener del mouse per trascinamento e doppio clic a tutti i componenti della finestra",
                },
                {
                    id: 4,
                    isPublic: true,
                    type: "ArrayList<String>",
                    name: "PrelevaDati",
                    params: [{}],
                    description: "Preleva i dati della classifica dal file 'classifica.txt' e li restituisce come ArrayList",
                },
                {
                    id: 5,
                    isPublic: true,
                    type: "boolean",
                    name: "ScriviDati",
                    params: [
                        { id: 0, type: "String", name: "newLine" }
                    ],
                    description: "Scrive nuovi dati nella classifica.txt e restituisce true se avviene con successo",
                },
                {
                    id: 6,
                    isPublic: true,
                    type: "void",
                    name: "calcolaPunteggio",
                    params: [
                        { id: 0, type: "Long", name: "elapsedTime" },
                        { id: 1, type: "int", name: "caselle" }
                    ],
                    description: "Calcola il punteggio del giocatore in base al tempo trascorso e al numero di caselle",
                },
                {
                    id: 7,
                    isPublic: true,
                    type: "String",
                    name: "getStats",
                    params: [],
                    description: "Restituisce una stringa con il nome del giocatore e il suo punteggio calcolato",
                }
            ]
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