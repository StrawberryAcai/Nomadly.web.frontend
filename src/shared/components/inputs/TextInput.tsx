import React from 'react';
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

interface TextInputProps {
  src: StaticImport | string;
  alt: string;
  placeholder: string;
  ref?: React.Ref<HTMLInputElement>
}
const TextInput: React.FC<TextInputProps> = ({src, alt, placeholder, ref}) => {
  return (
    <div className="h-full w-full flex p-3 border-outline border-1 box-border rounded-xl gap-1">
      <Image src={src} alt={alt} />
      <input type="text" placeholder={placeholder} ref={ref} className="flex-1 focus:outline-none" />
    </div>
  )
}

export default TextInput;