"use client";

import MainContainer from "@/shared/components/containers/MainContainer";
import TopBar from "@/shared/components/TopBar";
import Image from "next/image";

import Setting from '@public/icons/button/setting.svg';

export default function Page() {
  return (
    <MainContainer>
      <TopBar>
        <Image src={Setting} alt="setting" />
      </TopBar>
    </MainContainer>
  );
}
