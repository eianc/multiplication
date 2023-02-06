import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import { Multiplication } from "./Multiplication";
import {
  NO_MULTIPLES_MESSAGE,
  MULTIPLES_MESSAGE,
  MULTIPLES_START_AGAIN_MESSAGE,
} from "./constants";
import { generateArrayOfNumbers } from "../../utils/generateArrayOfNumbers";
import * as styles from "../ButtonNumber/ButtonNumber.styles";

const numbers = generateArrayOfNumbers(20);
const maxNumbersSelected = 2;

test("renders the correct text and buttons", () => {
  const { getByText, getAllByRole } = render(
    <Multiplication numbers={numbers} maxNumbersSelected={maxNumbersSelected} />
  );

  expect(getByText("Multiplication")).toBeInTheDocument();
  expect(
    getByText(
      "Please select a number or two from the grid to see their multiples"
    )
  ).toBeInTheDocument();
  expect(getByText("Clear selections")).toBeInTheDocument();
  expect(getAllByRole("button").length).toBe(21);
});

test("displays a message when no multiples are found", () => {
  const { getByText, getAllByRole } = render(
    <Multiplication numbers={numbers} maxNumbersSelected={maxNumbersSelected} />
  );

  fireEvent.click(getAllByRole("button")[17]);
  fireEvent.click(getAllByRole("button")[19]);

  expect(getByText(`${NO_MULTIPLES_MESSAGE} 17 and 19`)).toBeInTheDocument();
});

test("displays a message when two numbers with common multiples are selected", () => {
  const { getByText, getAllByRole } = render(
    <Multiplication numbers={numbers} maxNumbersSelected={maxNumbersSelected} />
  );

  fireEvent.click(getAllByRole("button")[1]);
  fireEvent.click(getAllByRole("button")[2]);

  expect(getByText(`${MULTIPLES_MESSAGE} 1 and 2`)).toBeInTheDocument();
});

test("displays a message when the maximum number of selections is reached", () => {
  const { getByText, getAllByRole } = render(
    <Multiplication numbers={numbers} maxNumbersSelected={maxNumbersSelected} />
  );

  for (let i = 1; i <= maxNumbersSelected + 1; i++) {
    fireEvent.click(getAllByRole("button")[i]);
  }

  expect(getByText(MULTIPLES_START_AGAIN_MESSAGE)).toBeInTheDocument();
});

test("clears the selections and message when the Clear selections button is clicked", () => {
  const { getByText, getAllByRole, getByTestId } = render(
    <Multiplication numbers={numbers} maxNumbersSelected={maxNumbersSelected} />
  );
  const button1 = getAllByRole("button")[1];
  const button2 = getAllByRole("button")[2];
  fireEvent.click(button1);
  fireEvent.click(button2);

  expect(button1).toHaveStyle({
    backgroundColor: styles.SELECTED_COLOUR,
  });
  expect(button2).toHaveStyle({
    backgroundColor: styles.SELECTED_COLOUR,
  });

  fireEvent.click(getByText("Clear selections"));

  expect(button1).toHaveStyle({
    backgroundColor: styles.UNSELECTED_COLOUR,
  });
  expect(button2).toHaveStyle({
    backgroundColor: styles.UNSELECTED_COLOUR,
  });
  expect(getByTestId("info")).toBeEmptyDOMElement();
});

test("renders the correct style for selected numbers", () => {
  const { getAllByRole } = render(
    <Multiplication numbers={numbers} maxNumbersSelected={maxNumbersSelected} />
  );
  const button1 = getAllByRole("button")[2];
  const button2 = getAllByRole("button")[5];

  fireEvent.click(button1);
  fireEvent.click(button2);

  expect(button1).toHaveStyle({
    backgroundColor: styles.SELECTED_COLOUR,
  });
  expect(button2).toHaveStyle({
    backgroundColor: styles.SELECTED_COLOUR,
  });
});

test("renders the correct style for multiple numbers", () => {
  const { getAllByRole } = render(
    <Multiplication numbers={numbers} maxNumbersSelected={maxNumbersSelected} />
  );
  const button1 = getAllByRole("button")[2];
  const button2 = getAllByRole("button")[5];

  fireEvent.click(button1);
  fireEvent.click(button2);

  expect(getAllByRole("button")[10]).toHaveStyle({
    backgroundColor: styles.MULTIPLE_COLOUR,
  });
  expect(getAllByRole("button")[20]).toHaveStyle({
    backgroundColor: styles.MULTIPLE_COLOUR,
  });
});

test("renders the correct styles for a non-selected, non-multiple number", () => {
  const { getAllByRole } = render(
    <Multiplication numbers={numbers} maxNumbersSelected={maxNumbersSelected} />
  );
  const button1 = getAllByRole("button")[2];
  const button2 = getAllByRole("button")[5];

  fireEvent.click(button1);
  fireEvent.click(button2);

  expect(getAllByRole("button")[7]).toHaveStyle({
    backgroundColor: styles.UNSELECTED_COLOUR,
  });
});
