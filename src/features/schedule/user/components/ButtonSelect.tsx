'use client';
import React, {useEffect, useState} from 'react';
import SectionContainer from "@/shared/components/containers/SectionContainer";

interface ButtonSelectProps {
  title: string;
  onChange: (value: string) => void;
  items: {name: string, value: string}[];
}
const ButtonSelect: React.FC<ButtonSelectProps> = ({title, onChange, items}) => {
  const [selected, setSelected] = useState<string>("");
  useEffect(()=>onChange(selected),[selected]);
  return (
    <SectionContainer className="flex-col gap-4">
      <span>{title}</span>
      <div className="flex justify-around h-[2.625rem] gap-2">
        {items.map((item, index) => (
          <button key={index}
                  className={`flex-1 rounded-xl 
                              ${selected===item.value?"border-1 border-[var(--primary)] bg-primary text-white":"border-1 border-outline"}`}
                  onClick={() => setSelected(item.value)}>
            {item.name}
          </button>
        ))}
      </div>
    </SectionContainer>
  )
}

export default ButtonSelect;