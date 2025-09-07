import React from 'react';
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

interface TextInputProps {
  src?: StaticImport | string;
  alt?: string;
  type?: "password" | "text";
  placeholder: string;
  ref?: React.Ref<HTMLInputElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}
const TextInput: React.FC<TextInputProps> = ({src, alt, placeholder, ref, onChange, type = "text", className}) => {
  return (
    <div className={`w-full flex p-3 border-outline border-1 box-border rounded-xl gap-1 ${className}`}>
      {src && alt && <Image src={src} alt={alt} />}
      <input type={type} placeholder={placeholder} ref={ref} className="flex-1 box-border focus:outline-none" onChange={onChange} required />
    </div>
  )
}

export default TextInput;