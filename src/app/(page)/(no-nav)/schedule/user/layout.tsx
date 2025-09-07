import React from "react";
import MainContainer from "@/shared/components/containers/MainContainer";

export default async function Layout({children}: {children: React.ReactNode}) {
  return (
    <MainContainer className="flex-1">
      {children}
    </MainContainer>
  )
}