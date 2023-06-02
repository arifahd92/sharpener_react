import React from "react";
import "./expenses.css";
export default function Expenses() {
  return (
    <div className="maincont">
      <div className="cont">
        <h1>expenses</h1>
      </div>
      <div className="cont-item">
        <div className="name">moovie</div>
        <div className="price">100$</div>
        <div className="location">poone iconic</div>
      </div>
      <div className="cont-item">
        <div className="name">icecream</div>
        <div className="price">10$</div>
        <div className="location">poone iconic</div>
      </div>
    </div>
  );
}
