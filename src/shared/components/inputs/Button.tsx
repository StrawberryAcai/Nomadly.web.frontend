import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
}
const Button: React.FC<ButtonProps> = ({children, className, onClick, type}) => {
  return (
    <button type={type} className={`${className} py-3 items-center bg-primary text-white rounded-[.5rem]`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;