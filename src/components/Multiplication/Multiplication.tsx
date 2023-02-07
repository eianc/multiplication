import React, { useState } from "react";
import * as styles from "./Multiplication.styles";
import { ButtonNumber } from "../ButtonNumber/ButtonNumber";
import { getCommonMultiples } from "../../utils/getCommonMultiples";
import {
  NO_MULTIPLES_MESSAGE,
  MULTIPLES_MESSAGE,
  MULTIPLES_START_AGAIN_MESSAGE,
} from "./constants";

interface MultiplicationProps {
  numbers: number[];
  maxNumbersSelected: number;
}

export const Multiplication = ({
  numbers,
  maxNumbersSelected,
}: MultiplicationProps) => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [multiples, setMultiples] = useState<number[]>([]);
  const [info, setInfo] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedNumber = parseInt(e.currentTarget.value);

    if (selectedNumbers.length < maxNumbersSelected) {
      const selected = [...selectedNumbers, selectedNumber];
      setSelectedNumbers(selected);

      const common = getCommonMultiples(selected, numbers);
      setMultiples(common);

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
        aria-label="Clear selections"
      >
        Clear selections
      </button>
      <p
        className={styles.info}
        data-testid="info"
        id="info-message"
        aria-describedby="info-message"
      >
        {info}
      </p>
      <ul className={styles.grid}>
        {numbers.map((i) => (
          <li key={i} className={styles.gridItem}>
            <ButtonNumber
              value={i}
              onClick={handleClick}
              selectedNumbers={selectedNumbers}
              multiples={multiples}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
