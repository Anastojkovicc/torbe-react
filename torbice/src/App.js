import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
import TorbiceForm from './components/TorbiceForm';
import TorbiceLista from './components/TorbiceLista';

function App() {
  const[torbice, setTorbice]=useState([]);

  function dodajTorbicu(torbica){
    setTorbice([torbica,...torbice]);
  }

  function obrisiTorbicu(id){
    setTorbice(torbice.filter(torbica=> torbica.id !== id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <TorbiceForm dodajTorbicu={dodajTorbicu}/>
        <TorbiceLista torbice={torbice} obrisiTorbicu={obrisiTorbicu} />
      </header>
    </div>
  );
}

export default App;
