interface ButtonProps {
  text: string;
  onClick?: () => void
}
export const Button = ({text, onClick}: ButtonProps) => <>
  <button onClick={onClick}>{text}</button>
</>