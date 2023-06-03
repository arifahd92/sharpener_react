import React from "react";
import ExpenseDate from "./ExpenseDate";

export default function CreateElement(props) {
  return React.createElement(
    "div",
    { className: "expense-item" },
    React.createElement(ExpenseDate, { date: props.date }),
    React.createElement(
      "div",
      {},
      React.createElement("h1", {}, "Expense 1"),
      React.createElement("h1", {}, "Expense 2")
    )
  );
}
