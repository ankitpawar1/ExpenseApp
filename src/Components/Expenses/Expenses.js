import React from "react";
import Card from "../Common/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const checkExpense = props.data.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });
  return <Card className="expenses">{checkExpense}</Card>;
};

export default Expenses;
