import React from 'react';
import SectionContainer from "@/shared/components/containers/SectionContainer";
import Link from "next/link";
import {Btn1xBg} from "@/shared/lib/assets/backgrounds";

const ShortcutButton: React.FC = () => (
  <Link href="/" className="bg-center flex-1 rounded-xl" style={{ backgroundImage: `url(${Btn1xBg.src})`, backgroundSize: "cover" }}>

  </Link>
)

const ShortcutButtons = () => {
  return (
    <div>
      <h3 className="px-6">🔍 빠르게 필요한 정보를 확인해 보세요!</h3>
      <SectionContainer className="h-[7.75rem] gap-4">
        <ShortcutButton />
        <ShortcutButton />
      </SectionContainer>
      <SectionContainer className="h-[7.75rem] gap-4">
        <ShortcutButton />
        <ShortcutButton />
      </SectionContainer>
    </div>
  )
}

export default ShortcutButtons;