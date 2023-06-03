import React from "react";
import CreateElement from "./components/CreateElement";

export default function App() {
  return (
    <div>
      <CreateElement date={new Date()} />
    </div>
  );
}
