import React, { useState } from "react";
import { generateArrayOfNumbers } from "../../utils/generateArrayOfNumbers";
import * as styles from "./Multiplication.styles";
import { ButtonNumber } from "../ButtonNumber/ButtonNumber";
import { getCommonMultiples } from "../../utils/getCommonMultiples";
import {
  MAX_NUMBER,
  MAX_NUMBERS_SELECTED,
  NO_MULTIPLES_MESSAGE,
  MULTIPLES_MESSAGE,
  MULTIPLES_START_AGAIN_MESSAGE,
} from "./constants";

export const Multiplication = () => {
  const numbers = generateArrayOfNumbers(MAX_NUMBER);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [multipliers, setMultipliers] = useState<number[]>([]);
  const [info, setInfo] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedNumber = parseInt((e.target as HTMLButtonElement).value);
    if (selectedNumbers.length < MAX_NUMBERS_SELECTED) {
      const selected = [...selectedNumbers, selectedNumber];
      setSelectedNumbers(selected);

      const common = getCommonMultiples(selected, numbers);
      setMultipliers(common);

      common.length > 0
        ? setInfo(`${MULTIPLES_MESSAGE} ${selected.join(" and ")}`)
        : setInfo(`${NO_MULTIPLES_MESSAGE} ${selected.join(" and ")}`);
    } else {
      setInfo(MULTIPLES_START_AGAIN_MESSAGE);
      setSelectedNumbers([]);
    }
  };

  const clearSelection = () => {
    setSelectedNumbers([]);
    setInfo("");
  };

  return (
    <div className={styles.container}>
      <h1>Multiplication</h1>
      <p>Please select a number or two from the grid to see their multiples</p>
      <button
        onClick={clearSelection}
        className={styles.clearButton}
        type="button"
      >
        Clear selections
      </button>
      <p className={styles.info}>{info}</p>
      <ul className={styles.grid}>
        {numbers.map((i) => (
          <li key={i} className={styles.gridItem}>
            <ButtonNumber
              value={i}
              onClick={handleClick}
              selectedNumbers={selectedNumbers}
              multipliers={multipliers}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
