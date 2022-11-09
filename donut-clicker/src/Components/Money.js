import React from 'react';

var totalMoney = 0;

export default function Money(props) {
  const plusOne = () => {
    const money = props.data[0];
    const setMoney = props.data[1];

    console.log(props);
    totalMoney = money + 2;
    setMoney(totalMoney);
    return totalMoney;
  };

  return (
    <div>
      <h1> Money: {totalMoney}</h1>
      <button onClick={plusOne}>Click me</button>
    </div>
  );
}
