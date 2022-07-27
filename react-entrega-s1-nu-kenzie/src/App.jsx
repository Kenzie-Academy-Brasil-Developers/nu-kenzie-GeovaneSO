import React from 'react';
import { useState } from 'react';
import Home from './Components/Home';
import Header from './Components/Header';
import Form from './Components/Form';
import Nav from './Components/Nav';
import Card from './Components/Lista';
import TotalMoney from './Components/TotalMoney';
import CardPadrão from './Components/Lista-Padrão';
import './App.css';

function App() {
  // function logar(){
    
  // }
  const [listTransactions, setListTransactions] = useState([ ]);
  const [list, setList] = useState('Todos');

  const maped =  listTransactions.filter((transaction) => transaction.type === list).map((transaction, index) => (
      <Card key={index} transaction={transaction} setListTransactions={setListTransactions} listTransactions={listTransactions}/>
  ));   

  return (
    <div className="App">
      <Header/>
      <main>
        <section className='section--form'>
          <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
          {
            listTransactions.length > 0 &&
            <TotalMoney listTransactions={listTransactions}/>
          }
        </section>
        <section className='section--list'>
          <Nav setList={setList} listTransactions={listTransactions} setListTransactions={setListTransactions}/>
          <ul>
            { 
              listTransactions.length === 0 ?
                <>
                  <CardPadrão/>
                  <CardPadrão/>
                  <CardPadrão/>
                </>
                :
                list === 'Todos' ?
                  listTransactions.map((transaction, index) => (
                    <Card key={index} transaction={transaction} setListTransactions={setListTransactions} listTransactions={listTransactions}/>
                  )) :  
                    maped
            }       
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;