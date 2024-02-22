import { useState,useEffect } from 'react'
import { cardList } from "./data.jsx";
import './App.css'
import PopExit from './components/PopExit/PopExit'
import PopNewCard from './components/PopNewCard/PopNewCard'
import PopBrowse from './components/PopBrowse/PopBrowse'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  const [cards, sedCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  function onCardAdd() {
    sedCards([...cards,
    {
      id: cards.length + 1,
      theme: "Theme",
      title: "Новая задача",
      date: "30.10.23",
      status: "Без статуса",
    }])
  }


  return (
    <>
      <div className="wrapper">
        {/* pop-up start*/}
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* pop-up end*/}
        <Header onCardAdd={onCardAdd}/>
        <Main cards={cards} isLoading={isLoading}/>
      </div>

    </>

  )
}

export default App
