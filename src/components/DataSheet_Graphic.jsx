import { useState } from "react";
import "../style/variables.css";
import "../style/DataSheet_Graphic.css";
import ClassAccordion from "./ClassAccordion"

function DataSheet_Graphic() {

    const graphicClasses = [
        {
            id: 0,
            class: "JCasella",
            description: "Classe che estende Jlabel e serve per avere una casella con i valori x,y",
            attributes: [
                { d: "x, y: servono per stabilire in quale posizione della griglia è", id: 0 },
            ],
            isMethods: true,
            methods: [
                {
                    id: 0,
                    isPublic: true,
                    type: "",
                    name: "JCasella",
                    params: [
                        { id: 0, type: "int", name: "x" },
                        { id: 1, type: "int", name: "y" },
                    ],
                    description: "costruttore che richiama super() per instanziare la label e anche gli altri attributi",
                },
                {
                    id: 1,
                    isPublic: true,
                    type: "void",
                    name: "ChangeImage",
                    params: [
                        { id: 0, type: "Stato", name: "s" },
                    ],
                    description: `Questo metodo è utilizzato per cambiare l'immagine associata alla casella,
                     in base allo stato specificato. Quando viene chiamato con uno specifico stato s, il metodo esegue 
                     un'operazione specifica in base al valore di s. Ad esempio, se lo stato è COPERTA, l'immagine della casella 
                     viene impostata con un'icona rappresentativa della copertura. Se lo stato è BRUCIATA, viene impostato uno 
                     sfondo nero per indicare che la casella è stata bruciata. Se lo stato è SCOPERTA, viene mostrata un'icona che 
                     rappresenta la casella come scoperta, e così via per gli altri stati definiti. Il metodo gestisce diversi stati 
                     della casella e modifica l'aspetto visivo della casella stessa di conseguenza, utilizzando le icone appropriate 
                     per rappresentare i vari stati.`,
                },
            ],
        },
        {
            id: 1,
            class: "JMatrice",
            description: "Classe che serve per gestire la matrice di JCasella e altri cambiamenti alla form",
            attributes: [
                { d: "c: oggetto CampoMinato", id: 0 },
                { d: "labels: matrice di oggetti JCasella", id: 1 },
            ],
            isMethods: true,
            methods: [
                {
                    id: 0,
                    isPublic: true,
                    type: "void",
                    name: "RefreshStatoJCasella",
                    params: [{}],
                    description: `Questo metodo si occupa di aggiornare lo stato visivo di tutte le caselle nella matrice in base allo stato corrente dei loro contenuti 
                    nel campo minato. Itera attraverso ogni cella nella matrice della casella. Se il valore restituito dal campo minato per quella posizione è minore o uguale 
                    a 0, significa che la cella è coperta, quindi viene impostata l'immagine di copertura. Altrimenti, se il valore è maggiore di 0, 
                    viene eseguito uno switch sul valore per determinare quale immagine assegnare in base al numero indicato o allo stato della casella (mina, bandiera, ecc.).`,
                },
                {
                    id: 1,
                    isPublic: true,
                    type: "void",
                    name: "removeMouseListeners",
                    params: [{}],
                    description: `Questo metodo rimuove tutti i listener del mouse da tutte le caselle della matrice. Per ogni casella nella matrice, recupera gli adapter del 
                    mouse associati e li rimuove dalla casella. Ciò impedisce alle caselle di rispondere a ulteriori eventi del mouse dopo che è stata rivelata una bomba o il 
                    gioco è terminato.`,
                },
                {
                    id: 2,
                    isPublic: true,
                    type: "void",
                    name: "RevealSlowBombe",
                    params: [{}],
                    description: `Questo metodo rivela lentamente le bombe una per una nella matrice. Avvia un nuovo thread che itera attraverso ogni cella nella matrice del campo minato. 
                    Se trova una bomba, cambia l'immagine della casella per rivelare la bomba e fa una pausa per un breve periodo di tempo, 
                    facendo apparire l'esplosione più lentamente per una migliore esperienza visiva. Dopo aver rivelato tutte le bombe, avvia il metodo Exsplosion per mostrare l'esplosione.`,
                },
                {
                    id: 3,
                    isPublic: true,
                    type: "void",
                    name: "Exsplosion",
                    params: [{}],
                    description: `Questo metodo mostra l'esplosione nella matrice. Avvia un nuovo thread che itera attraverso ogni cella nella matrice. 
                    Per ogni cella, cambia l'immagine per rappresentare l'esplosione, quindi fa una pausa per un breve periodo di tempo per mostrare l'effetto 
                    dell'esplosione. Dopo aver completato l'iterazione attraverso tutte le celle, avvia il metodo RemoveLabel per rimuovere le caselle e mostrare 
                    l'immagine di game over.`,
                },
                {
                    id: 4,
                    isPublic: true,
                    type: "void",
                    name: "RemoveLabel",
                    params: [{}],
                    description: `Questo metodo rimuove tutte le caselle dal frame. Avvia un nuovo thread che fa una breve pausa, poi itera attraverso 
                    tutte le caselle nella matrice, rendendole invisibili. Dopo aver reso invisibili tutte le caselle, chiama il metodo cambiaSfondoConImmagine 
                    per mostrare l'immagine di game over.`,
                },
                {
                    id: 5,
                    isPublic: true,
                    type: "void",
                    name: "cambiaSfondoConImmagine ",
                    params: [{}],
                    description: `Questo metodo imposta l'immagine di game over come sfondo del frame. Carica l'immagine da file, crea un nuovo JLabel con 
                    quell'immagine e lo posiziona nel content pane del frame. Questo metodo è chiamato quando il gioco termina, mostrando all'utente che il gioco è finito.`,
                },
            ],
        },
        {
            id: 2,
            class: "JCampoMinato",
            description: "Questa classe serve per la parte del gioco dove c’è il campo con le caselle. Le label le creo tramite la classe JMatrice.",
            attributes: [
                { d: "c: oggetto CampoMinato", id: 0 },
                { d: "labels: matrice di oggetti JCasella", id: 1 },
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
                    ],
                    description: `riscrivere i parametri del costruttore per riuscire a far passare dalla form Menù.java la difficoltà scelta dall’utente. 
                    Successivamente faccio uno switch per determinare la grandezza del form in base alla difficoltà scelta.`,
                },
                {
                    id: 1,
                    isPublic: true,
                    type: "void",
                    name: "formWindowClosed",
                    params: [
                        { id: 0, type: "java.awt.event.WindowEvent", name: "evt" },
                    ],
                    description: `Che quando chiude la finestra riapre la scelta delle difficoltà`,
                },
            ],
        },
        {
            id: 3,
            class: "Start",
            description: "",
            attributes: [{d: "none", id: 0}],
            isMethods: true,
            methods: [
                {
                    id: 0,
                    isPublic: true,
                    type: "",
                    name: "Start",
                    params: [{}],
                    description: `Questo metodo costituisce il costruttore della classe Start. È responsabile per l'inizializzazione della finestra di avvio del gioco. 
                    Viene chiamato all'avvio del programma. Inizializza i componenti della finestra di avvio, imposta il colore dello sfondo e posiziona la finestra al centro dello schermo.`,
                },
                {
                    id: 1,
                    isPublic: true,
                    type: "void",
                    name: "jLabel2MouseClicked",
                    params: [
                        { id: 0, type: "java.awt.event.MouseEvent", name: "evt" },
                    ],
                    description: `Questo metodo gestisce l'evento del clic sul pulsante "Start" nella finestra di avvio del gioco. Quando viene cliccato, mostra la finestra del menu 
                    principale del gioco e nasconde la finestra di avvio del gioco.`,
                },
                {
                    id: 2,
                    isPublic: true,
                    type: "void",
                    name: "jLabel2MouseMoved",
                    params: [
                        { id: 0, type: "java.awt.event.MouseEvent", name: "evt" },
                    ],
                    description: `Questo metodo gestisce l'evento del movimento del mouse sopra il pulsante "Start" nella finestra di avvio del gioco. 
                    Cambia l'icona del pulsante per mostrare uno stato "pressione".`,
                },
                {
                    id: 3,
                    isPublic: true,
                    type: "void",
                    name: "jLabel3MouseClicked",
                    params: [
                        { id: 0, type: "java.awt.event.MouseEvent", name: "evt" },
                    ],
                    description: `Questo metodo gestisce l'evento del clic sul pulsante "Regole" nella finestra di avvio del gioco. Quando viene cliccato, 
                    apre il browser predefinito all'URL delle regole del gioco.`,
                },
                {
                    id: 4,
                    isPublic: true,
                    type: "void",
                    name: "jLabel3MouseMoved",
                    params: [
                        { id: 0, type: "java.awt.event.MouseEvent", name: "evt" },
                    ],
                    description: `Questo metodo gestisce l'evento del movimento del mouse sopra il pulsante "Regole" nella finestra di avvio del gioco. 
                    Cambia l'icona del pulsante per mostrare uno stato "pressione".`,
                },
                {
                    id: 5,
                    isPublic: true,
                    type: "void",
                    name: "formMouseMoved",
                    params: [
                        { id: 0, type: "java.awt.event.MouseEvent", name: "evt" },
                    ],
                    description: `Questo metodo gestisce l'evento del movimento del mouse all'interno della finestra di avvio del gioco. Aggiorna l'icona dei 
                    pulsanti per mostrare il loro stato predefinito quando il mouse non è sopra di essi. Metodo: main Questo metodo è il punto di ingresso del programma. 
                    Avvia l'applicazione mostrando la finestra di avvio del gioco.`,
                },
            ],
        },
        {
            id: 4,
            class: "Menù",
            description: "Questa classe serve per la parte della scelta della difficoltà",
            attributes: [
                { d: "scelta: rappresenta la difficoltà", id: 0 }
            ],
            isMethods: true,
            methods: [
                {
                    id: 0,
                    isPublic: true,
                    type: "",
                    name: "Menù",
                    params: [
                        { id: 0, type: "Difficulty", name: "scelta" },
                    ],
                    description: `Questo metodo costituisce il costruttore della classe Menù. È responsabile per l'inizializzazione della finestra del menu. 
                    Viene chiamato all'avvio del programma. Inizializza i componenti della finestra del menu, imposta il colore dello sfondo, posiziona la finestra
                     al centro dello schermo e memorizza la difficoltà selezionata.`,
                },
                {
                    id: 1,
                    isPublic: true,
                    type: "void",
                    name: "BeasyMouseClicked",
                    params: [
                        { id: 0, type: "java.awt.event.MouseEvent", name: "evt" },
                    ],
                    description: `Questo metodo gestisce l'evento del clic sul pulsante "Facile" nel menu. Quando viene cliccato, cambia l'icona del pulsante per indicare che 
                    è stato selezionato il livello di difficoltà facile. Aggiorna anche le icone degli altri pulsanti per indicare che non sono selezionati.`,
                },
                {
                    id: 2,
                    isPublic: true,
                    type: "void",
                    name: "BeasyMouseMoved",
                    params: [
                        { id: 0, type: "java.awt.event.MouseEvent", name: "evt" },
                    ],
                    description: `Questo metodo gestisce l'evento del movimento del mouse sopra il pulsante "Facile" nel menu. Quando il mouse si muove sopra il pulsante e il livello di difficoltà 
                    non è già impostato su "Facile", cambia l'icona del pulsante per mostrare uno stato "pressione".`,
                },
                {
                    id: 3,
                    isPublic: true,
                    type: "void",
                    name: "BmediumMouseClicked",
                    params: [
                        { id: 0, type: "java.awt.event.MouseEvent", name: "evt" },
                    ],
                    description: `Questo metodo gestisce l'evento del clic sul pulsante "Medio" nel menu. Quando viene cliccato, cambia l'icona del pulsante per indicare che 
                    è stato selezionato il livello di difficoltà medio. Aggiorna anche le icone degli altri pulsanti per indicare che non sono selezionati.`,
                },
                {
                    id: 4,
                    isPublic: true,
                    type: "void",
                    name: "BmediumMouseMoved",
                    params: [
                        { id: 0, type: "java.awt.event.MouseEvent", name: "evt" },
                    ],
                    description: `Questo metodo gestisce l'evento del movimento del mouse sopra il pulsante "Medio" nel menu. Quando il mouse si muove sopra il pulsante e il livello di difficoltà 
                    non è già impostato su "Medio", cambia l'icona del pulsante per mostrare uno stato "pressione".`,
                },
                {
                    id: 5,
                    isPublic: true,
                    type: "void",
                    name: "BhardMouseClicked",
                    params: [
                        { id: 0, type: "java.awt.event.MouseEvent", name: "evt" },
                    ],
                    description: `Questo metodo gestisce l'evento del clic sul pulsante "Difficile" nel menu. Quando viene cliccato, cambia l'icona del pulsante per indicare che 
                    è stato selezionato il livello di difficoltà difficile. Aggiorna anche le icone degli altri pulsanti per indicare che non sono selezionati.`,
                },
                {
                    id: 6,
                    isPublic: true,
                    type: "void",
                    name: "BhardMouseMoved",
                    params: [
                        { id: 0, type: "java.awt.event.MouseEvent", name: "evt" },
                    ],
                    description: `Questo metodo gestisce l'evento del movimento del mouse sopra il pulsante "Difficile" nel menu. Quando il mouse si muove sopra il pulsante e il livello di difficoltà 
                    non è già impostato su "Difficile", cambia l'icona del pulsante per mostrare uno stato "pressione".`,
                },
                {
                    id: 7,
                    isPublic: true,
                    type: "void",
                    name: "formMouseMoved",
                    params: [
                        { id: 0, type: "java.awt.event.MouseEvent", name: "evt" },
                    ],
                    description: `Questo metodo gestisce l'evento del movimento del mouse all'interno della finestra del menu. Aggiorna l'icona di tutti i pulsanti per mostrare il loro stato predefinito 
                    quando il mouse non è sopra di essi.`,
                },
                {
                    id: 8,
                    isPublic: true,
                    type: "void",
                    name: "jLabel1MouseClicked",
                    params: [
                        { id: 0, type: "java.awt.event.MouseEvent", name: "evt" },
                    ],
                    description: `Questo metodo gestisce l'evento del clic sul pulsante "Avvia" nel menu. Quando viene cliccato, verifica se è stata selezionata una difficoltà. 
                    Se sì, avvia il gioco nascondendo la finestra del menu e mostrando la finestra del campo minato corrispondente alla difficoltà selezionata. Altrimenti, mostra 
                    un messaggio di avviso che richiede di selezionare una difficoltà prima di avviare il gioco.`,
                },
                {
                    id: 9,
                    isPublic: true,
                    type: "void",
                    name: "jLabel1MouseMoved",
                    params: [
                        { id: 0, type: "java.awt.event.MouseEvent", name: "evt" },
                    ],
                    description: `Questo metodo gestisce l'evento del movimento del mouse sopra il pulsante "Avvia" nel menu. Cambia l'icona del pulsante per mostrare uno stato "pressione".`,
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