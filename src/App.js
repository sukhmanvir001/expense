import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import HistoryCont from './components/HistoryCont';
import './App.css';
import Balance from './components/Balance';

function App() {
  const [totalBalance, setTotalBalance] = useState(() => {
    const balanceFromLocalStorage = localStorage.getItem("totalBalance");
    return balanceFromLocalStorage ? parseInt(balanceFromLocalStorage) : 0;
  });

  const [history, setHistory] = useState(() => {
    const historyFromLocalStorage = localStorage.getItem("history");
    return historyFromLocalStorage ? JSON.parse(historyFromLocalStorage) : [];
  });

  const [color, setColor] = useState();

  const onDelete = (item) => {
    console.log('Deleting the history item');
    setHistory(prevHistory => prevHistory.filter(e => e !== item));
    console.log("deleted", item);
  };

  const addExpenseBtn = (value, desc) => {
    console.log("Expense Added");
    setTotalBalance(prevTotalBalance => prevTotalBalance - parseInt(value));

    setColor("red");
    let sno;
    if (history.length === 0) {
      sno = 0;
    } else {
      sno = history[history.length - 1].sNo + 1;
    }

    const newItem = {
      sNo: sno,
      desc: desc,
      amount: value
    };

    setHistory(prevHistory => [...prevHistory, newItem]);
  };

  const balanceZero = () => {
    setTotalBalance(0);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const addAmountBtn = (value, desc) => {
    console.log('Amount added');
    setTotalBalance(prevTotalBalance => prevTotalBalance + parseInt(value));

    setColor("green");
    let sno;
    if (history.length === 0) {
      sno = 0;
    } else {
      sno = history[history.length - 1].sNo + 1;
    }

    const newItem = {
      sNo: sno,
      desc: desc,
      amount: value
    };

    setHistory(prevHistory => [...prevHistory, newItem]);
  };

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
    localStorage.setItem("totalBalance", totalBalance);
  }, [history, totalBalance]);

  return (
    <main>
      <Navbar />
      <Balance balanceZero={balanceZero} totalBalance={totalBalance} />
      <div className='container d-flex justify-content-evenly w-100 '>
        <Main addAmountBtn={addAmountBtn} addExpenseBtn={addExpenseBtn} />
        <HistoryCont clearHistory={clearHistory} color={color} history={history} onDelete={onDelete} />
      </div>
    </main>
  );
}

export default App;
