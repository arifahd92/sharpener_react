import React, { useState } from "react";
import "./expenses.css";

const Expenses = ({ cindex, name, amount, location, delFunc }) => {
  console.log(name);
  console.log(cindex);
  const [prevName, setPrevName] = useState(name);
  const [prevAmount, setPrevAmount] = useState(amount);
  const updateExpenses = () => {
    setPrevName("updated");
    setPrevAmount(100);
  };
  return (
    <div className="maincont">
      <div className="cont-item">
        <div className="name">{prevName + " " + cindex}</div>
        <div className="price">{prevAmount + "$"}</div>
        <div className="location">{location}</div>
        <button onClick={() => delFunc(cindex)}> delete</button>
        <button onClick={updateExpenses}>update</button>
      </div>
    </div>
  );
};
export default Expenses;
