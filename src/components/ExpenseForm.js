import React from "react";

export default function ExpenseWithInput() {
  return (
    <>
      <form action="#">
        <input
          type="text"
          placeholder="title"
          onChange={(e) => console.log(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="amount"
          onChange={(e) => console.log(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="location"
          onChange={(e) => console.log(e.target.value)}
        />
      </form>
    </>
  );
}
