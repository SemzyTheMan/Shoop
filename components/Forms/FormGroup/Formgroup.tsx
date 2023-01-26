import styles from "./FormGroup.module.css";
import { InputProps, SelectProps, Input } from "../Input/Input";
import { Email } from "../Input/email";
import { useState } from "react";

interface FormGroupProps extends InputProps {
  label: string;
}

interface FormGroupSelectProps extends SelectProps {
  label: string;
}

interface FormGroupEmailProps extends InputProps {
  label?: null;
}
export const FormGroup = ({
  label,
  options,
  type,
  valueField,
  labelType,
  labelField,
  className,
  placeholder,
}: FormGroupProps | FormGroupSelectProps | FormGroupEmailProps) => {
  const [password, showPassword] = useState(false);
  switch (type) {
    case "select":
      return (
        <div className={[className ? className : "", "block w-full"].join(" ")}>
          <label className={styles.label}>{label}</label>
          <Input
            className={["", "block w-full"].join(" ")}
            type={type}
            options={options}
            labelType={labelType}
            valueField={valueField}
            labelField={labelField}
            placeholder={placeholder}
          />
        </div>
      );
    case "email":
      return (
        <div className={[className ? className : "", "block w-full"].join(" ")}>
          <label className={styles.label}>{"Email"}</label>
          <Email
            placeholder={"Enter your email"}
            className={["", "block w-full"].join(" ")}
          />
        </div>
      );
    case "checkbox":
      return (
        <div
          className={[
            className ? className : "",
            "block",
            "flex flex-row gap-2 items-center",
          ].join(" ")}
        >
          <Input
            className={["", "block border border-gray-300 rounded-md"].join(
              " "
            )}
            type={"checkbox"}
            placeholder={placeholder}
          />
          <label className={styles.checkboxLabel}>{label}</label>
        </div>
      );
    default:
      return (
        <div className={[className ? className : "", "block w-full"].join(" ")}>
          <label className={styles.label}>{label}</label>
          <div className="relative flex flex-row items-center">
            <img
              className="absolute right-1"
              src={`/assets/${password ? "open-eye" : "close-eye"}.svg`}
              onClick={() => {
                showPassword(!password);
              }}
              alt="close"
            />
            <Input
              className={["", "block w-full"].join(" ")}
              type={password===false ? type : "text"}
              placeholder={placeholder}
            />
          </div>
        </div>
      );
  }
};
