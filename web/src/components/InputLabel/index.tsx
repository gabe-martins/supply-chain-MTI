
import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string
  name: string
}

const InputLabel: React.FC<InputProps> = ({label, name, ...rest}: InputProps) => {
  return (
    <div className="input-box">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest}/>
    </div>
  );
};

export default InputLabel;