"use client";
import React from "react";
import TopBar from "@/shared/components/layout/TopBar";
import Image from "next/image";
import Setting from "@public/icons/button/setting.svg";
import ProfileCard from "@/features/profile/components/ProfileCard";
import MainContainer from "@/shared/components/containers/MainContainer";
import NavBar from "@/features/profile/components/NavBar";
import Link from "next/link";
import { useProfileQuery } from "@/features/profile/hooks/useProfileQuery";

export default function Layout({children}: {children: React.ReactNode}) {
  const {data} = useProfileQuery();
  return (
    <MainContainer>
      <TopBar>
        <Link href="/profile/settings"><Image src={Setting} alt="setting" /></Link>
      </TopBar>
      <ProfileCard />
      {data && 
      <>
        <NavBar />
        {children}
      </>
      }
    </MainContainer>
  )
}