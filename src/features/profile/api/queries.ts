import api, {setUserId} from '@/shared/lib/axiosInstance';
import { ProfileDto } from './dto';
import {PlanListResponse} from "@/features/community/api/dto";
import {dummyPlanData} from "@/features/community/api/dummy";

export const getProfile = async (): Promise<ProfileDto> => {
  const res = await api.get<ProfileDto>("/api/users/profile");
  if(res.data) setUserId(res.data.id);
  return res.data;
};

export const getMePlan = async (): Promise<PlanListResponse[]> => {
  // await api.get<PlanListResponse>("/api/me/plans");
  return dummyPlanData
}

export const getMeBookmarkedPlan = async (): Promise<PlanListResponse[]> => {
  // await api.get<PlanListResponse>("/api/me/bookmark/plans");
  return dummyPlanData
}

export const getMePublicPlan = async (): Promise<PlanListResponse[]> => {
  // await api.get<PlanListResponse>("/api/me/board/plans");
  return dummyPlanData
}