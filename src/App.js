import React from 'react';
import './App.css';
import Die from "./Components/Die"

function App() {

  const [ dice, setDice ] = React.useState( () => { 
    return allNewDice()
    })

  function allNewDice () {
    let newArr = []
    for(let i=0;i<10;i++){
      let num = Math.ceil(Math.random()*6)
      newArr.push(num)
    }
    return newArr
  }


  const diceMaker = dice.map(diceElement => {
    return (
      <Die value={diceElement} />
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
          <button onClick={rollDice}>Roll Dice</button>
        </div>
      </div>
    </main>
  );
}

export default App;
