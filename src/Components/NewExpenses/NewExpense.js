import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const expenseData = (expense) => {
    const savedData = { ...expense, id: Math.random().toString() };
    // console.log(savedData);
    props.onSaveData(savedData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseData} />
    </div>
  );
};

export default NewExpense;
