import { useState } from "react";
import "../style/variables.css";
import "../style/DataSheet_Graphic.css";
import ClassAccordion from "./ClassAccordion"

function DataSheet_Graphic() {

    const graphicClasses = [
        {
            id: 0,
            class: "Classifica",
            description: "Classe che estende JFrame e visualizza la classifica dei giocatori con il punteggio",
            attributes: [
                { d: "classifica: area di testo per visualizzare i dati della classifica", id: 0 },
                { d: "player: etichetta che mostra il nome del giocatore", id: 1 },
                { d: "mouseClickPoint: variabile che memorizza il punto di clic del mouse per il trascinamento della finestra.", id: 2 },
                { d: "punteggio: variabile che tiene traccia del punteggio del giocatore", id: 3 },
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
                        { id: 3, type: "int", name: "height" }
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
                    description: "Inizializza i componenti della finestra Classifica, impostando layout, colore di sfondo e listener per eventi di mouse."
                },
                {
                    id: 2,
                    isPublic: true,
                    type: "void",
                    name: "refresh",
                    params: [],
                    description: "Aggiorna la classifica con i dati prelevati dal file 'classifica.txt'."
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
                    description: "Aggiunge listener del mouse per trascinamento e doppio clic a tutti i componenti della finestra."
                },
                {
                    id: 4,
                    isPublic: true,
                    type: "ArrayList<String>",
                    name: "PrelevaDati",
                    params: [],
                    description: "Preleva i dati della classifica dal file 'classifica.txt' e li restituisce come ArrayList."
                },
                {
                    id: 5,
                    isPublic: true,
                    type: "boolean",
                    name: "ScriviDati",
                    params: [
                        { id: 0, type: "String", name: "newLine" }
                    ],
                    description: "Scrive nuovi dati nella classifica.txt e restituisce true se avviene con successo."
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
                    description: "Calcola il punteggio del giocatore in base al tempo trascorso e al numero di caselle."
                },
                {
                    id: 7,
                    isPublic: true,
                    type: "String",
                    name: "getStats",
                    params: [],
                    description: "Restituisce una stringa con il nome del giocatore e il suo punteggio calcolato."
                },
            ],
        },
        {
            id: 1,
            class: "Flag",
            description: "Classe che estende JFrame e visualizza un pannello con indicatori di bandiera, indicando se il gioco è stato vinto o perso",
            attributes: [
                { d: "jPanel1: pannello che contiene le etichette e altri componenti della classe", id: 0 },
                { d: "labels: array di 10 etichette utilizzate per indicare il progresso o le bandiere", id: 1 },
                { d: "nflag: variabile intera che conta il numero di bandiere attualmente impostate", id: 2 },
                { d: "maxFlags: variabile intera che rappresenta il numero massimo di bandiere per il livello corrente", id: 3 },
                { d: "isPersa: booleano per indicare se il gioco è stato perso", id: 4 },
                { d: "isVinta: booleano per indicare se il gioco è stato vinto", id: 5 },
                { d: "mouseClickPoint: memorizza la posizione del mouse durante il clic per il trascinamento della finestra", id: 6 },
            ],
            isMethods: true,
            methods: [
                {
                    id: 0,
                    isPublic: true,
                    type: "",
                    name: "Flag",
                    params: [
                        { id: 0, type: "Difficulty", name: "d" },
                        { id: 1, type: "int", name: "x" },
                        { id: 2, type: "int", name: "y" }
                    ],
                    description: "Costruttore che inizializza la finestra 'Flag', impostando dimensioni e posizione in base alla difficoltà",
                },
                {
                    id: 1,
                    isPublic: true,
                    type: "void",
                    name: "initComponents",
                    params: [
                        { id: 0, type: "Difficulty", name: "d" },
                        { id: 1, type: "int", name: "x" },
                        { id: 2, type: "int", name: "y" },
                    ],
                    description: "Inizializza i componenti della finestra 'Flag', tra cui il pannello, le etichette e i listener per eventi di mouse",
                },
                {
                    id: 2,
                    isPublic: true,
                    type: "void",
                    name: "refresh",
                    params: [{}],
                    description: "Aggiorna le etichette in base al numero di bandiere e allo stato del gioco (vinto o perso)",
                },
                {
                    id: 3,
                    isPublic: true,
                    type: "void",
                    name: "setPersa",
                    params: [{}],
                    description: "Imposta lo stato del gioco a 'perso' e aggiorna le etichette di conseguenza",
                },
                {
                    id: 4,
                    isPublic: true,
                    type: "void",
                    name: "setVinta",
                    params: [{}],
                    description: "Imposta lo stato del gioco a 'vinto' e aggiorna le etichette di conseguenza",
                },
                {
                    id: 5,
                    isPublic: true,
                    type: "void",
                    name: "addFlag",
                    params: [{}],
                    description: "Aumenta il conteggio delle bandiere di 1 e aggiorna le etichette",
                },
                {
                    id: 6,
                    isPublic: true,
                    type: "void",
                    name: "removeFlag",
                    params: [{}],
                    description: "Diminuisce il conteggio delle bandiere di 1 e aggiorna le etichette",
                },
                {
                    id: 7,
                    isPublic: true,
                    type: "void",
                    name: "resetAllFlag",
                    params: [{}],
                    description: "Resetta il conteggio delle bandiere a 0 e aggiorna le etichette",
                },
                {
                    id: 8,
                    isPublic: true,
                    type: "int",
                    name: "getFlagCount",
                    params: [{}],
                    description: "Restituisce il conteggio attuale delle bandiere",
                },
                {
                    id: 9,
                    isPublic: true,
                    type: "void",
                    name: "setFlagColor",
                    params: [
                        { id: 0, type: "int", name: "index" },
                        { id: 1, type: "java.awt.Color", name: "bg" },
                        { id: 2, type: "java.awt.Color", name: "border" },
                    ],
                    description: "Imposta il colore di sfondo e il bordo di una singola etichetta della bandiera",
                },
                {
                    id: 10,
                    isPublic: true,
                    type: "void",
                    name: "setAllFlagColor",
                    params: [
                        { id: 0, type: "java.awt.Color", name: "bg" },
                        { id: 1, type: "java.awt.Color", name: "border" },
                    ],
                    description: "Imposta il colore di sfondo e il bordo di tutte le etichette della bandiera",
                },
            ],
        },
        {
            id: 2,
            class: "JCampoMinato",
            description: "Classe che estende JFrame e rappresenta il campo minato, con variabili statiche per flag e classifica, e gestisce eventi del frame",
            attributes: [
                { d: "flag: oggetto Flag utilizzato per visualizzare il conteggio delle bandiere", id: 0 },
                { d: "classifica: oggetto Classifica per visualizzare la classifica dei giocatori", id: 1 },
                { d: "startTime: variabile per memorizzare il tempo di inizio del gioco", id: 2 },
                { d: "lightGreen: colore di sfondo per la finestra del campo minato", id: 3 },
                { d: "nome: nome del giocatore corrente", id: 4 },
            ],
            isMethods: true,
            methods: [
                {
                    id: 0,
                    isPublic: true,
                    type: "",
                    name: "JCampoMinato",
                    params: [
                        { id: 0, type: "Difficulty", name: "d" },
                        { id: 1, type: "String", name: "nome" },
                    ],
                    description: "Costruttore che inizializza il frame del campo minato, impostando dimensioni e posizione in base alla difficoltà e al nome del giocatore",
                },
                {
                    id: 1,
                    isPublic: true,
                    type: "void",
                    name: "formWindowClosed",
                    params: [
                        { id: 0, type: "java.awt.event.WindowEvent", name: "evt" },
                    ],
                    description: "Gestisce l'evento di chiusura della finestra, riaprendo il menu principale e rendendo invisibili flag e classifica",
                },
                {
                    id: 2,
                    isPublic: true,
                    type: "void",
                    name: "formWindowClosing",
                    params: [
                        { id: 0, type: "java.awt.event.WindowEvent", name: "evt" },
                    ],
                    description: "Gestisce l'evento di chiusura della finestra, riaprendo il menu principale e resettando tutte le bandiere",
                },
                {
                    id: 3,
                    isPublic: true,
                    type: "void",
                    name: "formComponentResized",
                    params: [
                        { id: 0, type: "java.awt.event.ComponentEvent", name: "evt" },
                    ],
                    description: "Gestisce l'evento di ridimensionamento del frame, riportando flag e classifica allo stato normale",
                },
                {
                    id: 4,
                    isPublic: true,
                    type: "void",
                    name: "formWindowIconified",
                    params: [
                        { id: 0, type: "java.awt.event.WindowEvent", name: "evt" },
                    ],
                    description: "Gestisce l'evento di minimizzazione della finestra, minimizzando anche flag e classifica",
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