import React from 'react';
import SectionContainer from "@/shared/components/containers/SectionContainer";
import Link from "next/link";
import Image from "next/image";

const AiScheduleButton: React.FC = () => {
  return (
    <SectionContainer className="h-32">
      <Link href="/" className="">
        버튼 들어가는 자리
      </Link>
    </SectionContainer>
  )
}

export default AiScheduleButton;