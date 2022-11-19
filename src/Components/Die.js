import React, { Component } from 'react'


export default function Die (props) {
    return (
        <div className='dice-container'>
            {props.value}
        </div>
    )

}