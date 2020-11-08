import React, { InputHTMLAttributes } from "react";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  valueType: string;
}

const InputLabel: React.FC<InputProps> = ({
  label,
  name,
  valueType,
  ...rest
}: InputProps) => {
  return (
    <div className="input-box">
      <label htmlFor={name}>{label}</label>
      <input type={valueType} id={name} {...rest} />
    </div>
  );
};

export default InputLabel;
