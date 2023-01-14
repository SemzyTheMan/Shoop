import styles from "./FormGroup.module.css";
import { InputProps, SelectProps, Input } from "../Input/Input";
import { Email } from "../Input/email";

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
          <Input
            className={["", "block w-full"].join(" ")}
            type={type}
            placeholder={placeholder}
          />
        </div>
      );
  }
};
