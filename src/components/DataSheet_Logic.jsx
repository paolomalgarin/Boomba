import { useState } from "react";
import "../style/variables.css";
import "../style/DataSheet_Logic.css";
import ClassAccordion from "./ClassAccordion"

function DataSheet_Logic() {

    const logicClasses = [
        {
            id: 0,
            class: "Difficulty",
            description: "È una classe enum che contiene 3 valori che andranno a determinare la grandezza del campo da gioco e il numero di mine",
            attributes: [
                { d: "easy: indica la difficoltà per i principianti", id: 0.0 },
                { d: "--> 10 mine in un campo 9x9", id: 0.1 },
                { d: "medium: indica la difficoltà media", id: 0.2 },
                { d: "--> 40 mine in un campo 16x16", id: 0.3 },
                { d: "hard:  indica la difficoltà esperta", id: 0.4 },
                { d: "--> 99 mine in un campo 30x16", id: 0.5 },
            ],
            isMethods: false,
            methods: [{}],
        },
        {
            id: 1,
            class: "Punto",
            description: "Classe che rappresenta un punto (x, y)",
            attributes: [
                { d: "x: posizione del punto sull’asse delle ascisse (corrisponde alla ‘i’ nelle matrici)", id: 0 },
                { d: "y: posizione del punto sull’asse delle ordinate (corrisponde alla ‘j’ nelle matrici)", id: 1 },
            ],
            isMethods: true,
            methods: [
                {
                    id: 0,
                    isPublic: true,
                    type: "int",
                    name: "equals",
                    params: [
                        { id: 0, type: "Punto", name: "p" },
                    ],
                    description: "Controlla se il punto ha le stesse coordinate di un altro",
                },
            ],
        },
        {
            id: 2,
            class: "Mina",
            description: "Classe che rappresenta una mina all’interno della matrice di CampoMinato, indicandone la posizione",
            attributes: [
                { d: "Bounds: i limiti della matrice", id: 0 },
                { d: "Pos: la posizione della mina all’interno della matrice", id: 1 },
            ],
            isMethods: true,
            methods: [
                {
                    id: 0,
                    isPublic: true,
                    type: "Punto",
                    name: "getCoord",
                    params: [
                        { id: 0, type: "", name: "" },
                    ],
                    description: "Getter di pos",
                },
                {
                    id: 1,
                    isPublic: true,
                    type: "Punto",
                    name: "setCoord",
                    params: [
                        { id: 0, type: "int", name: "x" },
                        { id: 1, type: "int", name: "y" },
                    ],
                    description: "Setter di pos",
                },
            ],
        },
        {
            id: 3,
            class: "Casella",
            description: "Classe che rappresenta una casella del CampoMinato",
            attributes: [
                { d: "value: valore della casella", id: 0 },
                { d: "isFlagged: booleano, indica se è stata posizionata una bandierina sulla casella", id: 1 },
            ],
            isMethods: true,
            methods: [
                {
                    id: 0,
                    isPublic: true,
                    type: "int",
                    name: "getValue",
                    params: [
                        { id: 0, type: "", name: "" },
                    ],
                    description: "Ritorna il valore value o 11 (che indica una bandierina) se isFlagged è true",
                },
                {
                    id: 1,
                    isPublic: true,
                    type: "void",
                    name: "setValue",
                    params: [
                        { id: 0, type: "int", name: "value" },
                    ],
                    description: "Setter di value",
                },
                {
                    id: 2,
                    isPublic: true,
                    type: "boolean",
                    name: "isFlagged",
                    params: [
                        { id: 0, type: "", name: "" },
                    ],
                    description: "Getter di isFlagged",
                },
                {
                    id: 3,
                    isPublic: true,
                    type: "boolean",
                    name: "flag",
                    params: [
                        { id: 0, type: "", name: "" },
                    ],
                    description: "Nega isFlagged (se isFlagged è true diventa false e viceversa). Ritorna true se la flag può essere posizionata ed è stata posizionata/tolta",
                },
                {
                    id: 4,
                    isPublic: true,
                    type: "void",
                    name: "decrementa",
                    params: [
                        { id: 0, type: "", name: "" },
                    ],
                    description: "Decrementa di 1 il valore di value",
                },
                {
                    id: 5,
                    isPublic: true,
                    type: "String",
                    name: "toString",
                    params: [
                        { id: 0, type: "", name: "" },
                    ],
                    description: "",
                },
            ],
        },
        {
            id: 4,
            class: "CampoMinato",
            description: "Classe che rappresenta il campo minato tramite una matrice di Casella",
            attributes: [
                { d: "[ ][ ]campo: matrice di oggetti Casella che rappresenta il campo", id: 0 },
                { d: "bounds: oggetto Punto che rappresenta i limiti della matrice campo", id: 1 },
                { d: "mine: ArrayList di oggetti Mina che rappresenta le mine del campo", id: 2 },
                { d: "isFirstClick: boolean flag per indicare il primo click (true = è il primo click)", id: 3 },
                { d: "diff: oggetto Difficulty rappresenta la difficoltà di gioco", id: 4 },
                { d: "maxFlags: intero che indica il massimo numero di flags posizionabili", id: 5 },
                { d: "flags: intero che indica il numero di flags posizionate", id: 6 },
            ],
            isMethods: true,
            methods: [
                {
                    id: 0,
                    isPublic: true,
                    type: "",
                    name: "CampoMinato",
                    params: [
                        { id: 0, type: "Difficulty", name: "diff" },
                    ],
                    description: "Costruttore, genera un nuovo campo in base al valore di diff.Inizializza isFirstClick (true), this.diff (diff), flags (0), bounds (in base a diff) e campo. Invoca generaCampo()",
                },
                {
                    id: 1,
                    isPublic: false,
                    type: "void",
                    name: "generaMine",
                    params: [
                        { id: 0, type: "", name: "" },
                    ],
                    description: "Popola l’attributo mine con oggetti Mina con attributi pos diversi tra loro",
                },
                {
                    id: 2,
                    isPublic: true,
                    type: "void",
                    name: "generaBordi",
                    params: [
                        { id: 0, type: "Punto", name: "p" },
                    ],
                    description: "Genera i bordi numerati intorno alla mina nel Punto p",
                },
                {
                    id: 3,
                    isPublic: true,
                    type: "void",
                    name: "generaCampo",
                    params: [
                        { id: 0, type: "", name: "" },
                    ],
                    description: "Inizializza la matrice, genera i bounds in base alla difficoltà, chiama generaMine(), posiziona le mine e crea i bordi intorno con generaBordi() Ritorna true se la flag può essere posizionata ed è stata posizionata/tolta",
                },
                {
                    id: 3,
                    isPublic: true,
                    type: "int",
                    name: "getAt",
                    params: [
                        { id: 0, type: "Punto", name: "p" },
                    ],
                    description: "Ritorna il valore della casella di campo nel punto p. Controlla automaticamente i bounds",
                },
                {
                    id: 4,
                    isPublic: true,
                    type: "Punto",
                    name: "getBounds",
                    params: [
                        { id: 0, type: "", name: "" },
                    ],
                    description: "Getter dei bounds",
                },
                {
                    id: 5,
                    isPublic: true,
                    type: "boolean",
                    name: "isPresente",
                    params: [
                        { id: 0, type: "Punto", name: "p" },
                    ],
                    description: "Controlla se per ogni Mina dell’ArrayList mine le coordinate sono uguali a quella di un Punto p. Ritorna true se esiste già la mina in quel punto",
                },
                {
                    id: 6,
                    isPublic: true,
                    type: "boolean",
                    name: "ceckBounds",
                    params: [
                        { id: 0, type: "Punto", name: "p" },
                    ],
                    description: "Controlla se le coordinate del  Punto p sono dentro i limiti della matrice",
                },
                {
                    id: 7,
                    isPublic: true,
                    type: "boolean",
                    name: "isVinta",
                    params: [
                        { id: 0, type: "", name: "" },
                    ],
                    description: "Ritorna true se è stata scoperta ogni casella senza una mina",
                },
                {
                    id: 8,
                    isPublic: true,
                    type: "boolean",
                    name: "isMaxFlags",
                    params: [
                        { id: 0, type: "", name: "" },
                    ],
                    description: "Ritorna true se tutte le bandierine sono state utilizzate",
                },
                {
                    id: 9,
                    isPublic: true,
                    type: "int",
                    name: "placeFlag",
                    params: [
                        { id: 0, type: "Punto", name: "p" },
                    ],
                    description: "Nega isFlagged (se isFlagged è true diventa false e viceversa). Ritorna true se la flag può essere posizionata ed è stata posizionata/tolta",
                },
                {
                    id: 10,
                    isPublic: false,
                    type: "void",
                    name: "scopriCasella",
                    params: [
                        { id: 0, type: "Punto", name: "p" },
                    ],
                    description: "Crea il campo minato al primo click del mouse nella matrice. Normalmente, invece, va a scoprire la casella e quelle nelle vicinanze se la casella è vuota",
                },
                {
                    id: 11,
                    isPublic: true,
                    type: "boolean",
                    name: "click",
                    params: [
                        { id: 0, type: "Punto", name: "p" },
                    ],
                    description: "Ritorna -1 se il punto p è una mina. Altrimenti controlla se il punto p ha una bandierina e se non cel'ha, chiama il metodo scopriCasella(p) e ritorna 1 se la partita è stata vinta con quel click. Ritorna 0 se non è successo niente",
                },
                {
                    id: 12,
                    isPublic: true,
                    type: "String",
                    name: "toString",
                    params: [
                        { id: 0, type: "", name: "" },
                    ],
                    description: "Ritorna una stringa che rappresenta graficamente lo stato della matrice (usata solo per test)",
                },
            ],
        },
    ];



    return (
        <div className="DataSheet_Logic">
            <h2 className="title">DATASHEET - LOGIC</h2>
            {
                logicClasses
                    .map((classData) => (
                        <ClassAccordion data={classData} key={classData.id} />
                    ))
            }
        </div>
    )
}

export default DataSheet_Logic;