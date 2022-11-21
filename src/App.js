import React from 'react';
import './App.css';
import Die from "./Components/Die"
import { nanoid } from 'nanoid'

function App() {

  const [ dice, setDice ] = React.useState( () => { 
    return allNewDice()
    })

  function allNewDice () {
    let newArr = []
    for(let i=0;i<10;i++){
      let num = Math.ceil(Math.random()*6)
      let obj = {value: num, isHeld: false, id: nanoid()}
      newArr.push(obj)
    }
    return newArr
  }


  function holdDice(id){
    setDice( prevDice => {
      return prevDice.map(note => {
        if(note.id === id){
          return {...note, isHeld: !note.isHeld}
        } else {
          return note
        }
      })
    })
  
  }


  const diceMaker = dice.map(diceElement => {
    return (
      <Die key={diceElement.id} 
           id = {diceElement.id} 
           value={diceElement.value} 
           isHeld={diceElement.isHeld} 
           holdDice = {() => {holdDice(diceElement.id)}}/>
    )
  })

  function rollDice () {
    setDice(allNewDice())
  }



  return (
    <main>
      <div className="box-container">
        <div className="inner-box">
          {diceMaker}
          <button onClick={rollDice} className="roll-btn">Roll Dice</button>
        </div>
      </div>
    </main>
  );
}

export default App;



