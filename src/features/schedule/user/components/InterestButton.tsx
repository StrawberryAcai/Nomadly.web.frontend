'use client';
import React from 'react';
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {useTravelStore} from "@/shared/store/useTravelStore";

interface InterestButtonProps {
  name: string;
  value: string;
  src: string | StaticImport;
}
const InterestButton: React.FC<InterestButtonProps> = ({name, value, src}) => {
  const {interests, addInterests, removeInterests} = useTravelStore();
  return (
    <button onClick={()=>{
      if(interests.includes(value)) removeInterests(value);
      else addInterests(value);
    }}>
      <Image src={src} alt={name} className={`w-25 h-25 p-2.5 rounded-xl border-1 ${interests.includes(value)?"border-[#0A66FF]":"border-outline"}`} width={80} height={80} />
      <span className="text-center">{name}</span>
    </button>
  )
}

export default InterestButton;