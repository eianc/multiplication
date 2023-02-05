import { css } from "@emotion/css";

export const container = css`
  max-width: 720px;
  margin: 24px auto;
  padding: 0 16px;
`;

export const grid = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  list-style-type: none;
  padding: 0;

  @media only screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const gridItem = css`
  grid-column-end: span 1;
  aspect-ratio: 5;
`;

export const clearButton = css`
  height: 36px;
  border: 1px solid #e3d5ca;
  background-color: #e5e5e5;
`;

export const info = css`
  color: #c1121f;
`;
