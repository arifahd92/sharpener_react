import React from "react";
import ExpenseDate from "./components/ExpenseDate";

export default function ExpenseItem({ title, amount, location, date }) {
  return (
    <div>
      <ExpenseDate date={date} />
      <div>{title}</div>
      <div>{amount}</div>
      <div>{location}</div>
    </div>
  );
}
