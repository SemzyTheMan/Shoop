import { Input, InputProps } from "./Input";

export const Email = ({ placeholder, className }: InputProps) => (
  <Input
    className={className ? className : ""}
    type={"email"}
    placeholder={placeholder}
  />
);
