import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ButtonNumber } from "./ButtonNumber";
import * as styles from "./ButtonNumber.styles";

const handleClick = jest.fn();

test("renders the correct styles for a selected number", () => {
  const selectedNumbers = [2];
  const multiples = [4, 6];

  const { getByRole } = render(
    <ButtonNumber
      value={2}
      selectedNumbers={selectedNumbers}
      multiples={multiples}
      onClick={handleClick}
    />
  );
  const button = getByRole("button");
  expect(button).toHaveStyle({
    backgroundColor: styles.SELECTED_COLOUR,
  });
});

test("renders the correct styles for a multiple", () => {
  const selectedNumbers = [2];
  const multiples = [4, 6];

  const { getByRole } = render(
    <ButtonNumber
      value={4}
      selectedNumbers={selectedNumbers}
      multiples={multiples}
      onClick={handleClick}
    />
  );
  const button = getByRole("button");
  expect(button).toHaveStyle({
    backgroundColor: styles.MULTIPLE_COLOUR,
  });
});

test("renders the correct styles for a non-selected, non-multiple number", () => {
  const selectedNumbers = [2, 3];
  const multiples = [6, 12];

  const { getByRole } = render(
    <ButtonNumber
      value={4}
      selectedNumbers={selectedNumbers}
      multiples={multiples}
      onClick={handleClick}
    />
  );
  const button = getByRole("button");
  expect(button).toHaveStyle({
    backgroundColor: styles.UNSELECTED_COLOUR,
  });
});

test("calls the handleClick function when clicked", () => {
  const selectedNumbers = [2, 3];
  const multiples = [6, 12];

  const { getByRole } = render(
    <ButtonNumber
      value={2}
      selectedNumbers={selectedNumbers}
      multiples={multiples}
      onClick={handleClick}
    />
  );
  const button = getByRole("button");
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
