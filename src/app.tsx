import React from "react";
import { Multiplication } from "./components/Multiplication/Multiplication";
import {
  MAX_NUMBER,
  MAX_NUMBERS_SELECTED,
} from "./components/Multiplication/constants";
import { generateArrayOfNumbers } from "./utils/generateArrayOfNumbers";

function App() {
  const numbers = generateArrayOfNumbers(MAX_NUMBER);
  return (
    <div className="App">
      <Multiplication
        numbers={numbers}
        maxNumbersSelected={MAX_NUMBERS_SELECTED}
      />
    </div>
  );
}

export default App;
