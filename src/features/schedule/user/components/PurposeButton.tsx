'use client';
import React from 'react';
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import {useTravelStore} from "@/shared/store/useTravelStore";

interface PurposeButtonProps {
  name: string;
  value: string;
  src: string|StaticImport;
}
const PurposeButton: React.FC<PurposeButtonProps> = ({name, value, src}) => {
  const {purpose, setField} = useTravelStore();
  return (
    <button className={`border-1 flex-1 rounded-[.5rem] ${purpose===value?"border-[#0A66FF]":"border-outline"}`}
            onClick={()=>setField("purpose",value)}>
      <Image src={src} alt={name} width={160} height={160} />
      <span>{name}</span>
    </button>
  )
}

export default PurposeButton;