import React from "react";
import "./expenses.css";

const Expenses = ({ cindex, name, amount, location, delFunc }) => {
  console.log(name);
  console.log(cindex);
  return (
    <div className="maincont">
      <div className="cont-item">
        <div className="name">{name + " " + cindex}</div>
        <div className="price">{amount}</div>
        <div className="location">{location}</div>
        <button onClick={() => delFunc(cindex)}> delete</button>
      </div>
    </div>
  );
};
export default Expenses;
