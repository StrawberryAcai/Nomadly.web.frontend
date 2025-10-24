import api, {setUserId} from '@/shared/lib/axiosInstance';
import { ProfileDto, MyPlan } from './dto';
import {BookmarkResponse, MePlanListResponse, PlanListResponse} from "@/features/community/api/dto";
import {dummyPlanData, dummyMyPlanData, dummyBookmarkData, dummyMeBoardData} from "@/features/community/api/dummy";


export const getProfile = async (): Promise<ProfileDto> => {
  const res = await api.get<ProfileDto>("/api/users/profile");
  if(res.data) setUserId(res.data.id);
  return res.data;
};

export const getMePlan = async (): Promise<MyPlan[]> => {
  const res = await api.get<MyPlan[]>("/api/me/plans");
  return res.data;
}

export const getMeBookmarkedPlan = async (): Promise<BookmarkResponse> => {
  const res = await api.get<BookmarkResponse>("/api/me/bookmark/place");
  return res.data.plans;
}

export const getMePublicPlan = async (): Promise<PlanListResponse[]> => {
  // await api.get<PlanListResponse>("/api/me/board/plans");
  return dummyPlanData
}


export const getMeLikeBoard = async () : Promise<MePlanListResponse[]> => {
  const res = await api.get<MePlanListResponse[]>("/api/me/like/board");
  return res.data;
}