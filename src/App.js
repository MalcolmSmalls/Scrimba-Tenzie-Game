import React from 'react';
import './App.css';
import Die from "./Components/Die"
import { nanoid } from 'nanoid'

function App() {

  const [ dice, setDice ] = React.useState( () => { 
    return allNewDice()
    })

  const [ tenzies, setTenzies ] = React.useState(false)

  React.useEffect(() => {
    const winningVal = dice[0].value 
    let count = 0
    for(let i = 0; i < dice.length; i++) {
      if(dice[i].value === winningVal && dice[i].isHeld === true){
        count++
        if(count === 10){
          setTenzies(true)
          return console.log('you won!')
      }    
    }

    }

  },[dice])

  function createDice() {
    return {value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid()}
  }

  function allNewDice () {
    let newArr = []
    for(let i=0;i<10;i++){
      newArr.push(createDice())
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
    setDice(prevDice => prevDice.map(die => {
      if(die.isHeld === false){
        return createDice()
      } else {
        return die
      }
    }))
  }



  return (
    <main>
      <div className="box-container">
        <div className="inner-box">
          <h1 className="title">Tenzies</h1>
          <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          {diceMaker}
          <button onClick={rollDice} className="roll-btn">Roll Dice</button>
        </div>
      </div>
    </main>
  );
}

export default App;



