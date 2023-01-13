interface ButtonProps {
  text: string;
  onClick?: () => void
}
export const Button = ({text, onClick}: ButtonProps) => <>
  <button className={'bg-blue-500 text-white px-4.5 py-3'} onClick={onClick}>{text}</button>
</>

interface IButtonProps extends ButtonProps {
  icon: JSX.Element
}
export const IButton = ({text, onClick, icon}: IButtonProps) => <>
  <button className={'flex flex-row gap-1 bg-blue-500 text-white px-4.5 py-3'} onClick={onClick}>
    {icon}
    <span>{text}</span>
  </button>
</>