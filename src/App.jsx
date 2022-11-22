import { useEffect, useState } from 'react';
import Form from './components/Form';
import Grid from './components/Grid';
import Header from './components/Header';
import Resume from './components/Resume';

const App = () => {
  const data = localStorage.getItem("transaction");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  const handleAdd = (transaction) => {
    const newTransactionList = [...transactionsList, transaction];
    setTransalcionsList(newTransactionList);
    localStorage.setItem("transaction", JSON.stringify(newTransactionList));
  }

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.isExpensive)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => item.isExpensive == false)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setExpense(`R$ ${expense}`)
    setIncome(`R$ ${income}`)
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`)

  }, [transactionsList]);

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
    </>
  );
}

export default App;
