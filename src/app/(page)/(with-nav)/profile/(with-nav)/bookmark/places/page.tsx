'use client';
import MainContainer from "@/shared/components/containers/MainContainer";
import {useEffect} from "react";
import api from "@/shared/lib/axiosInstance";

export default function Page() {
  useEffect(()=>{
    api.get("/api/me/bookmark/place").then((value)=>console.log(value.data));
  })
  return (
    <MainContainer>
      2
    </MainContainer>
  );
}
