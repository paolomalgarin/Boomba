import { useState } from "react";
import "../style/variables.css";
import "../style/DataSheet_Logic.css";
import ClassAccordion from "./ClassAccordion"

function DataSheet_Logic() {

    const logicClasses = [
        {
            id: 0,
            class: "AutoWin",
            description: "Classe che estende Thread e rappresenta un processo automatico per la vittoria nel gioco del campo minato. Quando attivato, clicca automaticamente su tutte le celle che non contengono mine e non sono già state scoperte.",
            attributes: [
                { d: "c: Oggetto CampoMinato associato a questa istanza di AutoWin", id: 0 },
            ],
            isMethods: true,
            methods: [
                {
                    id: 0,
                    isPublic: true,
                    type: "",
                    name: "AutoWin",
                    params: [{ id: 0, type: "CampoMinato", name: "c" }],
                    description: "Costruttore che inizializza un'istanza di AutoWin associandola al CampoMinato specificato.",
                },
                {
                    id: 1,
                    isPublic: true,
                    type: "void",
                    name: "run",
                    params: [{}],
                    description: "Metodo ereditato da Thread. Avvia il processo automatico di vittoria nel gioco del campo minato, eseguendo clic automatici su tutte le celle che non contengono mine e non sono già state scoperte.",
                },
            ],
        },
        {
            id: 1,
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
                    id: 4,
                    isPublic: true,
                    type: "int",
                    name: "getAt",
                    params: [
                        { id: 0, type: "Punto", name: "p" },
                    ],
                    description: "Ritorna il valore della casella di campo nel punto p. Controlla automaticamente i bounds",
                },
                {
                    id: 5,
                    isPublic: true,
                    type: "void",
                    name: "setAt",
                    params: [
                        { id: 0, type: "Punto", name: "p" },
                        { id: 1, type: "int", name: "value" },
                    ],
                    description: "Imposta il valore della casella nella posizione specificata",
                },
                {
                    id: 6,
                    isPublic: true,
                    type: "Punto",
                    name: "getBounds",
                    params: [{}],
                    description: "Getter dei bounds",
                },
                {
                    id: 7,
                    isPublic: true,
                    type: "int",
                    name: "getFlags",
                    params: [{}],
                    description: "Restituisce il numero di flags posizionate nel campo minato",
                },
                {
                    id: 8,
                    isPublic: true,
                    type: "boolean",
                    name: "isPresente",
                    params: [
                        { id: 0, type: "Punto", name: "p" },
                    ],
                    description: "Controlla se per ogni Mina dell’ArrayList mine le coordinate sono uguali a quella di un Punto p. Ritorna true se esiste già la mina in quel punto",
                },
                {
                    id: 9,
                    isPublic: true,
                    type: "boolean",
                    name: "ceckBounds",
                    params: [
                        { id: 0, type: "Punto", name: "p" },
                    ],
                    description: "Controlla se le coordinate del  Punto p sono dentro i limiti della matrice",
                },
                {
                    id: 10,
                    isPublic: true,
                    type: "boolean",
                    name: "isVinta",
                    params: [
                        { id: 0, type: "", name: "" },
                    ],
                    description: "Ritorna true se è stata scoperta ogni casella senza una mina",
                },
                {
                    id: 11,
                    isPublic: true,
                    type: "boolean",
                    name: "isMaxFlags",
                    params: [
                        { id: 0, type: "", name: "" },
                    ],
                    description: "Ritorna true se tutte le bandierine sono state utilizzate",
                },
                {
                    id: 12,
                    isPublic: true,
                    type: "int",
                    name: "placeFlag",
                    params: [
                        { id: 0, type: "Punto", name: "p" },
                    ],
                    description: "Nega isFlagged (se isFlagged è true diventa false e viceversa). Ritorna true se la flag può essere posizionata ed è stata posizionata/tolta",
                },
                {
                    id: 13,
                    isPublic: true,
                    type: "boolean",
                    name: "click",
                    params: [{ id: 0, type: "Punto", name: "p" }],
                    description: "Ritorna -1 se il punto p è una mina. Altrimenti controlla se il punto p ha una bandierina e se non cel'ha, chiama il metodo scopriCasella(p) e ritorna 1 se la partita è stata vinta con quel click. Ritorna 0 se non è successo niente",
                },
                {
                    id: 14,
                    isPublic: false,
                    type: "void",
                    name: "scopriCasella",
                    params: [
                        { id: 0, type: "Punto", name: "p" },
                    ],
                    description: "Crea il campo minato al primo click del mouse nella matrice. Normalmente, invece, va a scoprire la casella e quelle nelle vicinanze se la casella è vuota",
                },
                {
                    id: 15,
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
                    params: [{}],
                    description: "Ritorna il valore value o 11 (che indica una bandierina) se isFlagged è true",
                },
                {
                    id: 1,
                    isPublic: true,
                    type: "void",
                    name: "setValue",
                    params: [{ id: 0, type: "int", name: "value" },],
                    description: "Setter di value",
                },
                {
                    id: 2,
                    isPublic: true,
                    type: "int",
                    name: "getValue",
                    params: [{}],
                    description: "Getter di value",
                },
                {
                    id: 3,
                    isPublic: true,
                    type: "boolean",
                    name: "isFlagged",
                    params: [
                        { id: 0, type: "", name: "" },
                    ],
                    description: "Getter di isFlagged",
                },
                {
                    id: 4,
                    isPublic: true,
                    type: "boolean",
                    name: "flag",
                    params: [
                        { id: 0, type: "", name: "" },
                    ],
                    description: "Nega isFlagged (se isFlagged è true diventa false e viceversa). Ritorna true se la flag può essere posizionata ed è stata posizionata/tolta",
                },
                {
                    id: 5,
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
            id: 4,
            class: "Gioco",
            description: "Classe che rappresenta il gioco del campo minato",
            isMethods: true,
            methods: [
                {
                    id: 0,
                    isPublic: true,
                    type: "void",
                    name: "main",
                    params: [{ id: 0, type: "String[]", name: "args" }],
                    description: "Metodo principale per avviare il gioco",
                },
            ],
        },
        {
            id: 5,
            class: "Mina",
            description: "Classe che descrive una mina all'interno di un oggetto CampoMinato",
            attributes: [
                { d: "xBound: limite dell'asse delle x (è uguale alla x in -> new int[x][y])", id: 0 },
                { d: "yBound: limite dell'asse delle y (è uguale alla y in -> new int[x][y])", id: 1 },
                { d: "pos: la posizione della mina", id: 2 },
                { d: "r: Oggetto Random per generare numeri casuali", id: 3 },
            ],
            isMethods: true,
            methods: [
                {
                    id: 0,
                    isPublic: true,
                    type: "",
                    name: "Mina",
                    params: [
                        { id: 0, type: "int", name: "xBound" },
                        { id: 1, type: "int", name: "yBound" },
                    ],
                    description: "Costruttore che genera una nuova mina all'interno della matrice",
                },
                {
                    id: 1,
                    isPublic: true,
                    type: "",
                    name: "Mina",
                    params: [
                        { id: 0, type: "int", name: "x" },
                        { id: 1, type: "int", name: "y" },
                        { id: 2, type: "int", name: "xBound" },
                        { id: 3, type: "int", name: "yBound" },
                    ],
                    description: "Costruttore che genera una nuova mina all'interno della matrice",
                },
                {
                    id: 2,
                    isPublic: true,
                    type: "Punto",
                    name: "getCoord",
                    params: [{}],
                    description: "Ritorna la posizione della mina",
                },
                {
                    id: 3,
                    isPublic: true,
                    type: "boolean",
                    name: "setCoord",
                    params: [
                        { id: 0, type: "int", name: "x" },
                        { id: 1, type: "int", name: "y" },
                    ],
                    description: "Ritorna true se le coordinate sono valide (sono all'interno della matrice)",
                },
            ],
        },
        {
            id: 5,
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
                    type: "",
                    name: "Punto",
                    params: [
                        { id: 0, type: "int", name: "x" },
                        { id: 0, type: "int", name: "y" },
                    ],
                    description: "Costruttore che genera un nuovo punto con le coordinate passate come parametri",
                },
                {
                    id: 1,
                    isPublic: true,
                    type: "int",
                    name: "equals",
                    params: [{ id: 0, type: "Punto", name: "p" }],
                    description: "Controlla se il punto ha le stesse coordinate di un altro",
                },
            ],
        },
        {
            id: 6,
            class: "ScopriCasellaThr",
            description: "Classe che estende Thread e permette di scoprire una casella nel CampoMinato in modo concorrente",
            attributes: [
                { d: "campo: il campo minato in cui scoprire la casella", id: 0 },
                { d: "p: il punto della casella da scoprire", id: 1 },
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
                    description: "Costruttore che inizializza il campo e il punto della casella da scoprire",
                },
                {
                    id: 1,
                    isPublic: true,
                    type: "",
                    name: "ScopriCasellaThr",
                    params: [{ id: 0, type: "Punto", name: "p" }],
                    description: "Costruttore che inizializza solo il punto della casella da scoprire",
                },
                {
                    id: 2,
                    isPublic: true,
                    type: "void",
                    name: "run",
                    params: [{}],
                    description: "Esegue il thread per scoprire la casella e le caselle adiacenti, se vuote",
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