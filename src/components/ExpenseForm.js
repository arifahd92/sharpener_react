import React, { useState } from "react";

export default function ExpenseWithInput() {
  const [inputState, setInputState] = useState({
    title: "",
    amount: 0,
    location: "",
  });
  function handleSubmit(e) {
    console.log(e.preventDefault());
    console.log("form submitted");
    console.log(inputState);
  }
  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) =>
            setInputState({ ...inputState, title: e.target.value })
          }
        />
        <br />
        <input
          type="text"
          placeholder="amount"
          onChange={(e) =>
            setInputState({ ...inputState, amount: e.target.value })
          }
        />
        <br />
        <input
          type="text"
          placeholder="location"
          onChange={(e) =>
            setInputState({ ...inputState, location: e.target.value })
          }
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
