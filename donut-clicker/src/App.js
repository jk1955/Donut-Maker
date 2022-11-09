import { useState } from 'react';
import './App.css';
import Money from './Components/Money';

function App() {
  var [money, setMoney] = useState(0);
  return (
    <div className="MainPage">
      <Money data={[money, setMoney]} />

      <img className="donut-pic" src={'./donut.png'} alt="donut" />
    </div>
  );
}

export default App;
