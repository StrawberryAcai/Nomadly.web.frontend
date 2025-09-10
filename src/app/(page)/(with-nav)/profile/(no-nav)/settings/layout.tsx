import React from "react";
import TopBar from "@/shared/components/layout/TopBar";
import MainContainer from "@/shared/components/containers/MainContainer";

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <MainContainer>
      <TopBar />
      {children}
    </MainContainer>
  )
}