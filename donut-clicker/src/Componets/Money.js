import React from 'react'
import App from '../App';
import { useState } from 'react';

export default function Money(props) {
    const plusOne = () => {
        console.log(props.money)
        var totalMoney = props.money + 2;
        setMoney(totalMoney)
        return totalMoney; 
    }
  return (
    <div>
        <h1> Money: {props.money}</h1>
        <button onClick = {plusOne}>Click me</button>
        
    </div>
  )
}
