import React from "react";
import TopBar from "@/shared/components/layout/TopBar";
import Image from "next/image";
import Setting from "@public/icons/button/setting.svg";
import ProfileCard from "@/features/profile/components/ProfileCard";
import MainContainer from "@/shared/components/containers/MainContainer";
import NavBar from "@/features/profile/components/NavBar";
import Link from "next/link";

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <MainContainer>
      <TopBar>
        <Link href="/profile/settings"><Image src={Setting} alt="setting" /></Link>
      </TopBar>
      <ProfileCard />
      <NavBar />
      {children}
    </MainContainer>
  )
}