import React, { SelectHTMLAttributes } from "react";

import "./styles.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({
  label,
  name, 
  options,
  ...rest
}: SelectProps) => {
  return (
    <div className="select-box">
      
      <select value="" id="" {...rest}>
        <option value="" disabled hidden>
          Selecione um {label}
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label} - {option.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;