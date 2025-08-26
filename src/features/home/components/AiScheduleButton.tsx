import React from 'react';
import SectionContainer from "@/shared/components/containers/SectionContainer";
import Link from "next/link";
import Image from "next/image";
import {Btn2xBg} from "@/shared/lib/assets/backgrounds";
import {AI} from "@/shared/lib/assets/icons";

const AiScheduleButton: React.FC = () => {
  return (
    <SectionContainer className="h-32">
      <Link href="/" className="w-full h-full relative bg-center rounded-xl px-3 py-8" style={{ backgroundImage: `url(${Btn2xBg.src})`, backgroundSize: "cover" }}>
        <span className="text-white text-body-lg">AI로<br/>일정 생성하기</span>
        <Image src={AI} alt="simbol" className="absolute right-0 top-0 bottom-0" />
      </Link>
    </SectionContainer>
  )
}

export default AiScheduleButton;