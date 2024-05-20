import { ChangeEventHandler, ReactNode } from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  consentText?: string | ReactNode;
  onCheckboxChange?: ChangeEventHandler<HTMLInputElement>;
}

export default InputFieldProps;
