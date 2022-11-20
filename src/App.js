import React from 'react';
import './App.css';
import Die from "./Components/Die"

function App() {

  function allDice () {
    let newArr = []
    for(let i=0;i<10;i++){
      let num = Math.ceil(Math.random()*6)
      newArr.push(num)
    }
    console.log(newArr)
  }

  React.useEffect(() => {
    allDice()
  }, [])

  return (
    <main>
      <div className="box-container">
        <div className="inner-box">
          <Die value="1"/> 
          <Die value="2"/>
          <Die value="3"/> 
          <Die value="4"/>
          <Die value="5"/> 
          <Die value="6"/>
          <Die value="7"/> 
          <Die value="8"/>
          <Die value="9"/> 
          <Die value="10"/>
        </div>
      </div>
    </main>
  );
}

export default App;
