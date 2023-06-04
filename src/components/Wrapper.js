import React, { useEffect, useState } from "react";
import Expenses from "./Expenses";

const Wrapper = () => {
    let expensedata = [
        {
            name: "moovie",
            amount: 30,
            location: "poone",
        },
        {
            name: "riding",
            amount: 50,
            location: "poone",
        },
    ];
    const [updatedExpenses, setUpdatedExpenses] = useState(expensedata);


    const addexpense = (data) => {
        console.log("from addexpense")
        console.log(data)
        expensedata = [...updatedExpenses, data]
        console.log("i m finel data")
        console.log(expensedata)
        setUpdatedExpenses(expensedata)
    }
    useEffect(() => {
        const expenses = [];
        for (let i = 0; i < expensedata.length; i++) {
            expenses.push({
                name: expensedata[i].name,
                amount: expensedata[i].amount,
                location: expensedata[i].location,
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
                <Expenses addexpense={addexpense}
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
