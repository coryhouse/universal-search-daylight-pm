type ButtonProps = {
  /** Button Label
   *
   * Why our button is cool:
   * - It's ours
   * - It's free
   *
   * More info [here](https://storybook.js.org/docs/react/writing-docs/doc-blocks#markdown)
   */
  children: React.ReactNode;

  /** Called on Click */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Sets the button's color */
  variant: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({ children, onClick, variant }) => {
  return (
    <button
      style={{
        backgroundColor: variant === "primary" ? "#0a5c85" : "gray",
        color: "white",
        padding: 8,
        borderRadius: 4,
        border: "none",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
