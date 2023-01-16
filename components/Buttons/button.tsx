interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}
export const Button = ({ text, onClick, className }: ButtonProps) => (
  <>
    <button
      className={[
        className ? className : "",
        "bg-blue-500 text-white px-4.5 py-3 rounded-sm",
      ].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  </>
);

export const AltButton = ({ text, onClick, className }: ButtonProps) => (
  <>
    <button
      className={[
        className ? className : "",
        "bg-transparent text-blue-500 border border-blue-500 px-4.5 py-3 rounded-sm",
      ].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  </>
);

interface IButtonProps extends ButtonProps {
  icon: JSX.Element;
}
export const IButton = ({ text, onClick, icon, className }: IButtonProps) => (
  <>
    <button
      className={[
        className ? className : "",
        "flex flex-row gap-1 bg-blue-500 text-white px-4.5 py-3 rounded-sm",
      ].join(" ")}
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </button>
  </>
);

export const Login = ({ className }: { className?: string }) => (
  <Button className={className ? className : ""} text={"Login"} />
);
export const AltLogin = ({ className }: { className?: string }) => (
  <AltButton className={className ? className : ""} text={"Login"} />
);
