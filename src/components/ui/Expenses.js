import React from "react";
import "./expenses.css";

const Expenses = ({ name, amount, location }) => {
  return (
    <div className="maincont">
      <div className="cont-item">
        <div className="name">{name}</div>
        <div className="price">{amount}</div>
        <div className="location">{location}</div>
      </div>
    </div>
  );
}
export default Expenses
