import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
import TorbiceForm from './components/TorbiceForm';
import TorbiceLista from './components/TorbiceLista';
import Welcome from './components/Welcome';
import Nav from './components/Nav';
import { Route, Switch , BrowserRouter } from 'react-router-dom';

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
        <section>
          <Nav />
        <div class="telo">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Welcome}></Route>
              <Route path="/porucivanje">
                    <TorbiceForm dodajTorbicu={dodajTorbicu}/>
                   <TorbiceLista torbice={torbice} obrisiTorbicu={obrisiTorbicu} />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
        </section>
      </header>
    </div>
  );
}

export default App;
