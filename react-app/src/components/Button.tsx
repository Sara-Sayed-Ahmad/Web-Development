interface Props {
  children: string;
  color?: "secondary" | "danger" | "primary";
  click: () => void;
}

const Button = ({ children, click, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} type="submit" onClick={click}>
      {children}
    </button>
  );
};

export default Button;
