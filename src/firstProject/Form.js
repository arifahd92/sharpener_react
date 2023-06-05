import React, { useState } from "react";

export default function Form() {
  const [array, setarray] = useState([]);
  const [input, setInput] = useState({
    name: "",
    age: "",
  });
  const changeHandeler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submitHandeler = (e) => {
    e.preventDefault();
    if (input.name && input.age && input.age > 0) {
      setarray([...array, input]);
      setInput({
        name: "",
        age: "",
      });
    } else if (e.name.trim().length === 0) {
      window.alert("input valid name");
    } else {
      window.alert("input valid age");
    }
  };
  return (
    <div>
      <form action="" onSubmit={(e) => submitHandeler(e)}>
        <label htmlFor="">name</label>
        <br />
        <input
          value={input.name}
          type="text"
          name="name"
          id=""
          onChange={(e) => changeHandeler(e)}
        />
        <br />
        <label htmlFor="">age(year)</label>
        <br />
        <input
          value={input.age}
          type="number"
          name="age"
          id=""
          onChange={(e) => changeHandeler(e)}
        />
        <br />
        <input type="submit" name="" id="" />
      </form>
      {array.map((item) => {
        return (
          <>
            <h1>{`${item.name}  ${item.age} years`}</h1>
          </>
        );
      })}
    </div>
  );
}
