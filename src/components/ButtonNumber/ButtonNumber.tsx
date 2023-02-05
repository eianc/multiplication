import * as styles from "./ButtonNumber.styles";

interface ButtonNumberProps {
  value: number;
  selectedNumbers: number[];
  multipliers: number[];
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonNumber = ({
  value,
  selectedNumbers,
  multipliers,
  onClick,
}: ButtonNumberProps) => {
  let buttonClass = styles.button;

  if (selectedNumbers.length > 0 && multipliers.indexOf(value) !== -1) {
    buttonClass = styles.multiplier;
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
