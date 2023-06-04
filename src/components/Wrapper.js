import React, { useEffect, useState } from "react";
import Expenses from "./Expenses";

const Wrapper = () => {
    const [updatedExpenses, setUpdatedExpenses] = useState([]);

    const expensedata = [
        {
            name: "moovie",
            amount: 30,
            location: "poone",
        },
    ];

    useEffect(() => {
        const expenses = [];
        for (let i = 0; i < 100; i++) {
            expenses.push({
                name: expensedata[0].name,
                amount: expensedata[0].amount,
                location: expensedata[0].location,
                cindex: i,
            });
        }
        setUpdatedExpenses(expenses);
    }, []);

    const handleDelete = (index) => {
        let newArr = updatedExpenses.filter((item, ind) => ind !== index)
        setUpdatedExpenses(newArr);
    };

    return (
        <div>
            <div className="cont">
                <h1>Expenses</h1>
            </div>
            {updatedExpenses.map((expense) => (
                <Expenses
                    key={expense.key}
                    name={expense.name}
                    amount={expense.amount}
                    location={expense.location}
                    cindex={expense.cindex}
                    delFunc={handleDelete}
                />
            ))}
        </div>
    );
};

export default Wrapper;
