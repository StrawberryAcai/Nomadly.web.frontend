'use client';
import MainContainer from "@/shared/components/containers/MainContainer";
import {useEffect} from "react";
import axiosInstance from "@/shared/lib/axiosInstance";

export default function Page() {
  useEffect(()=>{
    axiosInstance.get("/api/me/bookmark/place").then((value)=>console.log(value.data));
  })
  return (
    <MainContainer>
      2
    </MainContainer>
  );
}
