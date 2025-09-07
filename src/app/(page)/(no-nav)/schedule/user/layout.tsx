import React from "react";
import MainContainer from "@/shared/components/containers/MainContainer";
import BottomButton from "@/features/schedule/user/components/BottomButton";

export default async function Layout({children}: {children: React.ReactNode}) {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  )
}