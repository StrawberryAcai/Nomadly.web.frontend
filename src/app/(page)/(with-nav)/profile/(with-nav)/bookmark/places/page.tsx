import MainContainer from "@/shared/components/containers/MainContainer";
import {useEffect} from "react";
import api from "@/shared/lib/axiosInstance";
import { getMeBookmarkedPlan } from "@/features/profile/api/queries";

export default async function Page() {
  const data = await getMeBookmarkedPlan();
  return (
    <MainContainer>
      2
    </MainContainer>
  );
}
