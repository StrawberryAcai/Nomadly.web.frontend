import React from 'react';
import SectionContainer from "@/shared/components/containers/SectionContainer";
import Link from "next/link";
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

import Community from "@public/icons/button/community.svg";
import Explore from "@public/icons/button/explore.svg";
import Tour from "@public/icons/button/tour.svg";
import Visa from "@public/icons/button/visa.svg";
import Bg from "@public/backgrounds/button1x.svg";

interface ShortcutButtonProps {
  href: string;
  caption: string;
  src: string | StaticImport;
  children: React.ReactNode;
}
const ShortcutButton: React.FC<ShortcutButtonProps> = ({href, caption, src, children}) => (
  <Link href={href} className="bg-center flex-1 rounded-xl px-3 py-8 relative" style={{ backgroundImage: `url(${Bg.src})`, backgroundSize: "cover" }}>
    <span className="text-white text-body-sm absolute top-6">{caption}</span>
    <div className="flex flex-col">
      <span className="text-white text-body-md relative top-[2px]">{children}</span>
      <span className="text-white text-body-md relative bottom-[2px]">바로가기</span>
    </div>
    <Image src={src} alt={caption} className="absolute top-1/2 right-0 transform -translate-y-1/2" />
  </Link>
)

const ShortcutButtons = () => {
  return (
    <div>
      <h3 className="px-6">🔍 빠르게 필요한 정보를 확인해 보세요!</h3>
      <SectionContainer className="h-[7.75rem] gap-4">
        <ShortcutButton href="/community" caption="혼자여도 괜찮아요" src={Community}>커뮤니티</ShortcutButton>
        <ShortcutButton href="/explore" caption="현지인과 함께" src={Explore}>지역체험</ShortcutButton>
      </SectionContainer>
      <SectionContainer className="h-[7.75rem] gap-4">
        <ShortcutButton href="https://www.visa.go.kr/openPage.do?MENU_ID=10102" caption="비자는 챙겨야죠" src={Visa}>비자정보</ShortcutButton>
        <ShortcutButton href="/tour" caption="가끔은 혼자서" src={Tour}>관광정보</ShortcutButton>
      </SectionContainer>
    </div>
  )
}

export default ShortcutButtons;