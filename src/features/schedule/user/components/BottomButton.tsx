'use client'
import React from 'react';
import {usePathname, useRouter} from "next/navigation";

interface BottomButtonProps {
  isActive: boolean;
  text?: string;
}
const BottomButton: React.FC<BottomButtonProps> = ({isActive, text}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    const segments = pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    const lastNumber = parseInt(lastSegment ?? "", 10);
    if (!isNaN(lastNumber)) segments[segments.length - 1] = String(lastNumber + 1);
    else segments.push("2");
    const newPath = "/" + segments.join("/");
    router.push(newPath);
  };
  return (
    <button className={`w-full h-[calc(4rem+env(safe-area-inset-bottom))] fixed bottom-0 text-white ${isActive?"bg-primary":"bg-[#AAAAAA]"}`}
    onClick={()=> {if(isActive)handleClick()}}>
      {text?text:"다음"}
    </button>
  )
}

export default BottomButton;