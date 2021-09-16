import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";

const dummy = [
  {
    id: 1,
    title: "Food",
    amount: 3000,
    date: new Date(2019, 1, 1),
  },
  {
    id: 2,
    title: "Rent",
    amount: 3000,
    date: new Date(2020, 1, 1),
  },
  {
    id: 3,
    title: "transport",
    amount: 1000,
    date: new Date(2021, 1, 1),
  },
  {
    id: 4,
    title: "clothes",
    amount: 2000,
    date: new Date(2021, 2, 2),
  },
];

function App() {
  const [expenses, setexpenses] = useState(dummy);
  const expensesData = (expense) => {
    console.log(expense);
    setexpenses((prevData) => {
      return [expense, ...prevData];
    });
  };

  return (
    <div>
      <NewExpense onSaveData={expensesData} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
