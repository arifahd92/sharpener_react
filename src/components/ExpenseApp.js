import React from 'react'
import ExpenseItem from './ExpenseItem';

export default function ExpenseApp() {
    let date = new Date()
    const expensedata = [
        {
            name: "moovie",
            amount: "30$",
            location: "poone",
        },
    ];
    return (
        <div>
            <ExpenseItem title={expensedata[0].name}
                amount={expensedata[0].amount}
                location={expensedata[0].location} date={date} />
        </div>
    )
}
