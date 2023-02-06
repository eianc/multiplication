import { css } from "@emotion/css";
export const UNSELECTED_COLOUR = "#f2e9e4";
export const SELECTED_COLOUR = "#14213d";
export const MULTIPLE_COLOUR = "#fca311";

export const button = css`
  border: 1px solid #fff;
  background-color: ${UNSELECTED_COLOUR};
  width: 100%;
  height: 100%;
  font-size: 16px;
`;

export const selectedNumber = css`
  border: 1px solid #fff;
  background-color: ${SELECTED_COLOUR};
  color: #fff;
  width: 100%;
  height: 100%;
  font-size: 16px;
`;

export const multiple = css`
  border: 1px solid #fff;
  background-color: ${MULTIPLE_COLOUR};
  color: #fff;
  width: 100%;
  height: 100%;
  font-size: 16px;
`;
