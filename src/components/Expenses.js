import React, { useState } from "react";
import "./expenses.css";
import ExpenseForm from "./ExpenseForm";
const Expenses = ({ cindex, name, amount, location, delFunc, addexpense }) => {
  console.log(name);
  console.log(cindex);
  const [prevName, setPrevName] = useState(name);
  const [prevAmount, setPrevAmount] = useState(amount);
  const updateExpenses = () => {
    setPrevName("updated");
    setPrevAmount(100);
  };
  function getdata(dataobject) {
    console.log("from get data");
    console.log(dataobject);
    addexpense(dataobject);
  }
  return (
    <>
      <ExpenseForm getdata={getdata} />
      <div className="maincont">
        <div className="cont-item">
          <div className="name">{prevName}</div>
          <div className="price">{prevAmount + "$"}</div>
          <div className="location">{location}</div>
          <button onClick={() => delFunc(cindex)}> delete</button>
          <button onClick={updateExpenses}>update</button>
        </div>
      </div>
    </>
  );
};
export default Expenses;
