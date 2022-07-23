import Header from './Components/Header';
import Form from './Components/Form';
import Nav from './Components/Nav';
import Card from './Components/Lista';
import TotalMoney from './Components/TotalMoney';
import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [listTransactions, setListTransactions] = useState([
  ]);
  return (
    <div className="App">
      <Header/>
      <main>
        <section className='section--form'>
          <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>

          <TotalMoney listTransactions={listTransactions}/>
        </section>
        <section>
          <Nav listTransactions={listTransactions}/>
          <ul>
            { listTransactions.map((transaction, index) => (
                <Card key={index} transaction={transaction} listTransactions={listTransactions}/>
              ))
            }       
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;