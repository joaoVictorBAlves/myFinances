import { useEffect, useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Resume from './components/Resume';

const App = () => {
  const data = localStorage.getItem("transacions");
  const [transacionsList, setTransalcionsList] = useState(
    data ? JSON.parse(data) : []
  )
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transacionsList
      .filter((item) => item.expense)
      .map((tranction) => Number(tranction.amount));

    const amountIncome = transacionsList
      .filter((item) => item.income)
      .map((tranction) => Number(tranction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setExpense(`R$${expense}`)
    setIncome(`R$${income}`)
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$${total}`)

  }, [transacionsList]);

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form />
    </>
  );
}

export default App;
