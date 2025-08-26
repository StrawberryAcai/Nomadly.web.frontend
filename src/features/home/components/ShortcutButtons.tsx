import React from 'react';
import SectionContainer from "@/shared/components/containers/SectionContainer";
import Link from "next/link";
import {Btn1xBg} from "@/shared/lib/assets/backgrounds";

interface ShortcutButtonProps {
  href: string;
  caption: string;
  children: React.ReactNode;
}
const ShortcutButton: React.FC<ShortcutButtonProps> = ({href, caption, children}) => (
  <Link href={href} className="bg-center flex-1 rounded-xl px-3 py-8 relative" style={{ backgroundImage: `url(${Btn1xBg.src})`, backgroundSize: "cover" }}>
    <span className="text-white text-body-sm absolute top-6">{caption}</span>
    <div className="flex flex-col">
    <span className="text-white text-body-md relative top-[2px]">{children}</span>
    <span className="text-white text-body-md relative bottom-[2px]">바로가기</span>
    </div>
  </Link>
)

const ShortcutButtons = () => {
  return (
    <div>
      <h3 className="px-6">🔍 빠르게 필요한 정보를 확인해 보세요!</h3>
      <SectionContainer className="h-[7.75rem] gap-4">
        <ShortcutButton href="/" caption="혼자여도 괜찮아요">커뮤니티</ShortcutButton>
        <ShortcutButton href="/" caption="현지인과 함께">지역체험</ShortcutButton>
      </SectionContainer>
      <SectionContainer className="h-[7.75rem] gap-4">
        <ShortcutButton href="/" caption="비자는 챙겨야죠">비자정보</ShortcutButton>
        <ShortcutButton href="/" caption="가끔은 혼자서">관광정보</ShortcutButton>
      </SectionContainer>
    </div>
  )
}

export default ShortcutButtons;