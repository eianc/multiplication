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
  const isSelected =
    selectedNumbers.length > 0 && selectedNumbers.indexOf(value) !== -1;
  const isMultiple =
    selectedNumbers.length > 0 && multiples.indexOf(value) !== -1;

  if (isMultiple) {
    buttonClass = styles.multipleNumberButton;
  }
  if (isSelected) {
    buttonClass = styles.selectedNumberButton;
  }

  return (
    <button
      type="button"
      className={buttonClass}
      value={value}
      onClick={onClick}
      tabIndex={0}
      aria-labelledby={`number-${value}`}
    >
      <span id={`number-${value}`} className={styles.selectedNumber}>
        {value}
      </span>
      {isMultiple && (
        <span>is a multiple of {selectedNumbers.join(" and ")}</span>
      )}
    </button>
  );
};
