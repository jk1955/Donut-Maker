import { useState } from 'react';
import './App.css';
import Money from './Componets/Money';

function App() {
  var [money, setMoney] = useState(0);
  return (
    <div className="MainPage">
     <Money money = {money} /> 
   
      <img 
        
        className ='donut-pic' 
        src={'./donut.png'} 
        alt='donut'
        />

    </div>
  );
}
export setMoney

export default App;
