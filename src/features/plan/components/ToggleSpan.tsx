'use client'
import React, {useState} from 'react';

interface ToggleSpanProps {
  day: number;
  children: React.ReactNode;
}
const ToggleSpan: React.FC<ToggleSpanProps> = ({day, children}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div onClick={()=>setIsOpen(!isOpen)} className="border-b-1 border-outline py-2">
      <span className="text-body-lg py-2 w-full">{day}일차</span>
      {isOpen && children}
    </div>
  )
}

export default ToggleSpan;