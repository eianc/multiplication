import { css } from "@emotion/css";
export const UNSELECTED_COLOUR = "#f2e9e4";
export const SELECTED_COLOUR = "#14213d";
export const MULTIPLE_COLOUR = "#fca311";

const buttonBase = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
`;

export const button = css`
  ${buttonBase};
  border: 1px solid #fff;
  background-color: ${UNSELECTED_COLOUR};
`;

export const selectedNumberButton = css`
  ${buttonBase};
  border: 1px solid #fff;
  background-color: ${SELECTED_COLOUR};
  color: #fff;
`;

export const multipleNumberButton = css`
  ${buttonBase};
  border: 1px solid #fff;
  background-color: ${MULTIPLE_COLOUR};
  color: #fff;
`;

export const selectedNumber = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
