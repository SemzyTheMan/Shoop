export interface InputProps {
  type?: InputType;
  className?: string;
  placeholder?: string;
  options?: null;
  valueField?: null;
  labelField?: null;
  labelType?: null;
  onfocus?: any;
}
export interface SelectProps {
  type: "select";
  className?: string;
  placeholder?: string;
  onfocus?: any;
  options: any[];
  valueField?: string;
  labelField?: string;
  labelType?: labelType;
}
type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";
type labelType = "cd";

const labeler = (
  option: any,
  { labelField, labelType }: { labelType?: string; labelField?: string }
) => {
  if (labelField) return option[labelField] as string;
  if (labelType) {
    switch (labelType) {
      case "cd":
        return `${option["code"]} - ${option["description"]}`;
      default:
        return option;
    }
  }
  return option;
};
export const Input = ({
  type = "text",
  options,
  valueField,
  onfocus,
  labelType,
  labelField,
  className,
  placeholder,
}: InputProps | SelectProps) => {
  let classes =
    "border rounded-sm border-gray-100 ring-0 outline-none leading-5 px-3.5 py-2.5";
  switch (type) {
    case "select":
      classes += " pr-4";
      return (
        <select className={[classes, className].join(" ")} defaultValue={""}>
          <option>{placeholder}</option>
          {options &&
            options.map((option, index) => (
              <option
                key={index}
                value={
                  valueField && Object.hasOwn(option, valueField)
                    ? option[valueField]
                    : option
                }
              >
                {labeler(option, { labelType, labelField })}
              </option>
            ))}
        </select>
      );
    default:
      classes += "";
      return (
        <input
          placeholder={placeholder}
          type={type}
          className={[classes, className].join(" ")}
          onFocus={onfocus}
        />
      );
  }
};
