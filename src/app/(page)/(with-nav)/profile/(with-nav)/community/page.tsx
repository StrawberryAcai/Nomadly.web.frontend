"use client";
import {getMeBookmarkedPlan} from "@/features/profile/api/queries";
import MainContainer from "@/shared/components/containers/MainContainer";
import PlanList from "@/shared/components/plan/PlanList";
import api from "@/shared/lib/axiosInstance";
import { useEffect } from "react";

export default function Page() {
  useEffect(()=> {
    console.log(api.get("/api/me/like/board"));
  })
  return (
    <MainContainer>
      temp
      {/*{data && <PlanList data={data} />}*/}
    </MainContainer>
  );
}
