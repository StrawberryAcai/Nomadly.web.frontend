'use client';
import React, {useState} from 'react';
import Image from "next/image";

import Downarrow from '@public/icons/button/downarrow.svg'

interface SelectProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  items: string[];
}
const Select: React.FC<SelectProps> = ({placeholder, items}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="px-3 py-1.5 rounded-[1.1875rem] border-1 border-outline relative" onClick={()=>setIsOpen(!isOpen)}>
      <button className="flex" >{selected?selected:placeholder}<Image src={Downarrow} alt="DownArrow" /></button>
      {isOpen && <div className="px-3 py-1.5 gap-1.5 bg-background top-9.5 rounded-[1.1875rem] border-1 border-outline flex flex-col absolute left-0 right-0 max-h-23 overflow-y-auto">{items.map((value, index) =>
        <SelectItem key={index}
                    value={value}
                    onClick={()=>setSelected(value)} />
      )}</div>}
    </div>
  )
}

interface SelectItemProps {
  value: string;
  onClick?: () => void;
}
const SelectItem: React.FC<SelectItemProps> = ({value, onClick}) => {
  return (
    <div onClick={onClick}>
      {value}
    </div>
  )
}

export default Select;