import React from "react";
import MainContainer from "@/shared/components/containers/MainContainer";
import TopBar from "@/shared/components/layout/TopBar";

export default async function Layout({children}: {children: React.ReactNode}) {
  return (
    <MainContainer>
      <TopBar></TopBar>
      {children}
    </MainContainer>
  )
}