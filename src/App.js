import React from 'react';
import { Header } from './components/Header';
import { Cashflow } from './components/Cashflow';
import { IncomeExpense } from './components/IncomeExpense';
import { Equity } from './components/Equity';
import { CashRequired } from './components/CashRequired';
import { DetailList } from './components/DetailList';
import { AddDetails } from './components/AddDetails';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Cashflow />
        <IncomeExpense />
        <Equity />
        <CashRequired />
        <DetailList />
        <AddDetails />
      </div>
    </GlobalProvider>
  );
}

export default App;
