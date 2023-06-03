import React from "react";

function ExpenseDate({ date }) {
  let month = date.toLocaleString("en-US", { month: "short" });

  let day = date.toLocaleString("en-US", { day: "2-digit" });

  let year = date.getFullYear();
  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
