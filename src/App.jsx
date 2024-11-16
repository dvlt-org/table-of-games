import React from 'react'
import "./index.css"
import { useState } from 'react'

export default function App() {
  const [newGame, setNewGame] = useState("")
  const [games, setGames] = useState([])


  function addButton() {
    if (newGame === "") {
      alert("Iltimos o'yinni kriting")
    }
    setGames([...games, newGame])
    setNewGame("")
  }
  function editButton(index) {
    const updatedName = prompt("O‘yinning yangi nomini kiriting:", games[index]);
    if (updatedName && updatedName.trim() !== "") {
      const updatedGames = games.map((item, i) =>
        i === index ? updatedName : item
      );
      setGames(updatedGames);
    }
  }
  function deleteButton(index) {
    const newGamesList = games.filter((_, item) => item !== index)
    console.log(newGamesList)
    setGames(newGamesList)
  }

  function changeNewGame(event) {
    setNewGame(event.target.value)
  }

  console.log(games)

  return (
    <div className='app'>
      <div className='app-container'>
        <h1>Bolalar uchun o'yinlar</h1>
        <div className='app-container__form'>
          <input type="text" placeholder="O'yinni yozing !" onChange={(event) => changeNewGame(event)} />
          <button onClick={addButton}>Qo'shish</button>
        </div>
        <div className="app-container__content">
          {
            games.map((item, index) => {
              return (
                <div className='content-item' key={index}>
                  <p>{item}</p>
                  <div className="content-item__buttons">
                    <button className='item-buttons_update'>
                      <i className="fa-regular fa-pen-to-square" onClick={() => editButton(index)}></i>
                    </button>
                    <button className='item-buttons_delete'>
                      <i className="fa-solid fa-trash" onClick={() => { deleteButton(index) }}></i>
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
