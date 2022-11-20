import React, { Component } from 'react'


export default function Die (props) {

    
    const styles = {
     backgroundColor: props.isHeld ? '#59E391' : "FFFFFF"
    }

    return (
        <div className='dice-container' style={styles} onClick={()=>props.holdDice(props.id)}>
            {props.value}
        </div>
    )

}