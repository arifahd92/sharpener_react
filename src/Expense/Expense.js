import React, { useState } from "react";

export default function Expense() {
  const [data, setData] = useState([{}]);
  const [inputState, setInputState] = useState({
    date: "",
    name: "",
    amount: 0,
    location: "",
    year: 2023,
  });
  function handleSubmit(e) {
    console.log(e.preventDefault());
    console.log("form submitted");
    console.log(inputState.date);
    const date = new Date(inputState.date);
    let currentyear = date.getFullYear();
    setInputState({ ...inputState, year: currentyear });

    setData([inputState, ...data]);
  }
  function handleselect(e) {
    console.log("some thing selected");
    let selectedyear = e.target.value;
    console.log(selectedyear);

    let filtered = data.filter((item) => {
      console.log(item.year == selectedyear);
      return item.year == selectedyear;
    });
    console.log(filtered);
    setData(filtered);
  }
  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="date"
          name=""
          id=""
          onChange={(e) =>
            setInputState({ ...inputState, date: e.target.value })
          }
        />
        <br />
        <input
          type="text"
          placeholder="name"
          onChange={(e) =>
            setInputState({ ...inputState, name: e.target.value })
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
      <select name="" id="" value={"qwer"} onChange={handleselect}>
        <option selected disabled>
          sort by year
        </option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
      {data.map((item, ind) => {
        return (
          <>
            <h1>
              {item.date} {item.name} {item.amount} {item.location} {item.year}
            </h1>
          </>
        );
      })}
    </>
  );
}
