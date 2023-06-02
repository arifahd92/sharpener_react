import React from "react";
import Expenses from "./Expenses";

export default function Wrapper() {
    const expensedata = [
        {
            name: "moovie",
            amount: "30$",
            location: "poone",
        },
    ];
    const expensesArray = [];

    for (let i = 0; i < 100; i++) {
        expensesArray.push(
            <Expenses
                key={i}
                name={expensedata[0].name}
                amount={expensedata[0].amount}
                location={expensedata[0].location}
            />
        );
    }

    return (
        <div>
            <div className="cont">
                <h1>expenses</h1>
            </div>
            {expensesArray}
        </div>
    );
}
