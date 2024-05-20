import InputFieldProps from "@/_components/InputField/InputField.interface";

const InputField = ({
  type,
  placeholder,
  value,
  onChange,
  checked,
  consentText,
  onCheckboxChange,
  title,
}: InputFieldProps) => {
  return (
    <div>
      {title && <div>{title}</div>}
      {type !== "checkbox" && (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {type === "checkbox" && (
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={onCheckboxChange}
          />
          {consentText}
        </label>
      )}
    </div>
  );
};

export default InputField;
