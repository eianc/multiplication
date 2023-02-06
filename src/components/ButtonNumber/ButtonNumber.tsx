import * as styles from "./ButtonNumber.styles";

interface ButtonNumberProps {
  value: number;
  selectedNumbers: number[];
  multiples: number[];
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonNumber = ({
  value,
  selectedNumbers,
  multiples,
  onClick,
}: ButtonNumberProps) => {
  let buttonClass = styles.button;

  if (selectedNumbers.length > 0 && multiples.indexOf(value) !== -1) {
    buttonClass = styles.multiple;
  }
  if (selectedNumbers.length > 0 && selectedNumbers.indexOf(value) !== -1) {
    buttonClass = styles.selectedNumber;
  }
  return (
    <button
      type="button"
      className={buttonClass}
      value={value}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
