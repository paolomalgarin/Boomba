//import
import { useState } from 'react'
//stile
import './style/variables.css'
import './App.css'
//variabili
import campoMinatoLogo from "./assets/logo.png"
import game_bg from "./assets/game-bg.png"
import tmp_coperto from "./assets/campoMinato-objects/coperta.jpg"  //roba tmp per cardsData *->
import tmp_vuoto from "./assets/campoMinato-objects/scoperta.jpg"
import tmp_mina from "./assets/campoMinato-objects/bomba.png"
import tmp_flag from "./assets/campoMinato-objects/flag.png"
import tmp_1 from "./assets/campoMinato-objects/1.png"
import tmp_2 from "./assets/campoMinato-objects/2.png"
import tmp_3 from "./assets/campoMinato-objects/3.png"
import tmp_4 from "./assets/campoMinato-objects/4.png"
import tmp_5 from "./assets/campoMinato-objects/5.png"
import tmp_6 from "./assets/campoMinato-objects/6.png"
import tmp_7 from "./assets/campoMinato-objects/7.png"
import tmp_8 from "./assets/campoMinato-objects/8.png"  //roba tmp per cardsData <-*
//componenti
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ItemShowcase from "./components/ItemShowcase"
import RulesItem from "./components/RulesItem"
import DataSheetItem from "./components/DataSheetItem"
import Footer from "./components/Footer"


function App() {

  //---------------------------------------------------- DATI SALVATI LOCALMENTE ----------------------------------------------------
  const [count, setCount] = useState(0)  //link della navbar
  const linkTitles = [
    {
      id: 0,
      name: "HOME",
      link: "#home",
    },
    {
      id: 1,
      name: "RULES",
      link: "#rules",
    },
    {
      id: 2,
      name: "DATASHEET",
      link: "#datasheet",
    },
    {
      id: 3,
      name: "CREDITS",
      link: "#credits",
    },
  ]

  const cardsData = [  //dati delle cards degli elementi
    {
      id: 0,
      imgURL: tmp_coperto,
      imgAlt: "spazio coperto",
      name: " SPAZIO COPERTO",
      desc: "Lo spazio coperto non si può sapere cosa contenga fin quando non viene premuto. La prima volta è sempre uno spazio vuoto.",
    },
    {
      id: 1,
      imgURL: tmp_vuoto,
      imgAlt: "spazio vuoto",
      name: " SPAZIO VUOTO",
      desc: "Lo spazio vuoto indica che in quel punto non c'era nessuno tra gli elementi sottostanti.",
    },
    {
      id: 2,
      imgURL: tmp_mina,
      imgAlt: "mina",
      name: "MINA",
      desc: "Se vedi questo elemento vuol dire che hai perso.",
    },
    {
      id: 3,
      imgURL: tmp_flag,
      imgAlt: "flag",
      name: "FLAG",
      desc: "La flag si posiziona co il tasto dx e segna che sotto di essa c'è una mina. Una volta piazzate tutte correttaente hai vinto il gioco!",
    },
    {
      id: 4,
      imgURL: tmp_1,
      imgAlt: "numero 1",
      name: "NUMERO 1",
      desc: "Il numero 1 indica che negli 8 blocchi adiacenti c'è 1 sola mina.",
    },
    {
      id: 5,
      imgURL: tmp_2,
      imgAlt: "numero 2",
      name: "NUMERO 2",
      desc: "Il numero 2 indica che negli 8 blocchi adiacenti ci sono solo 2 mine.",
    },
    {
      id: 6,
      imgURL: tmp_3,
      imgAlt: "numero 3",
      name: "NUMERO 3",
      desc: "Il numero 3 indica che negli 8 blocchi adiacenti ci sono solo 3 mine.",
    },
    {
      id: 7,
      imgURL: tmp_4,
      imgAlt: "numero 4",
      name: "NUMERO 4",
      desc: "Il numero 4 indica che negli 8 blocchi adiacenti ci sono 4 mine.",
    },
    {
      id: 8,
      imgURL: tmp_5,
      imgAlt: "numero 5",
      name: "NUMERO 5",
      desc: "Il numero 5 indica che negli 8 blocchi adiacenti ci sono 5 mine.",
    },
    {
      id: 9,
      imgURL: tmp_6,
      imgAlt: "numero 6",
      name: "NUMERO 6",
      desc: "Il numero 6 indica che negli 8 blocchi adiacenti ci sono 6 mine.",
    },
    {
      id: 10,
      imgURL: tmp_7,
      imgAlt: "numero 7",
      name: "NUMERO 7",
      desc: "Il numero 7 indica che negli 8 blocchi adiacenti ci sono 7 mine.",
    },
    {
      id: 11,
      imgURL: tmp_8,
      imgAlt: "numero 8",
      name: "NUMERO 8",
      desc: "Il numero 8 indica che in tutti e 8 i blocchi adiacenti c'è una mina.",
    },
  ]


  //---------------------------------------------------- FUNZIONE ----------------------------------------------------

  return (
    <>
      <Navbar logoURL={campoMinatoLogo} linkTitles={linkTitles} />
      <Hero imgURL={game_bg} title={"BOOMBA"} id="home" />
      <ItemShowcase cards={cardsData} title={"elementi"} />
      <RulesItem id="rules" />
      <DataSheetItem id="datasheet" />
      <Footer attributions={[{ id: 0 }]} id="credits" />
    </>
  )

}

export default App
