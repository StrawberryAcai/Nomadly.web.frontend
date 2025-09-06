'use client';
import React from 'react';
import Image from "next/image";
import {useRouter} from "next/navigation";

import LeftArrow from '@public/icons/arrow/left_arrow.svg';

interface TopBarProps {
  children?: React.ReactNode;
}
const TopBar: React.FC<TopBarProps> = ({children}) => {
  const router = useRouter();
  return (
    <header className="px-4 py-2 flex items-center justify-between">
      <Image src={LeftArrow} alt="left-arrow" width="24" height="24" onClick={() => {router.back()}} />
      {children}
    </header>
  )
}
export default TopBar;