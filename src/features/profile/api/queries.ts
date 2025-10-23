import api, {setUserId} from '@/shared/lib/axiosInstance';
import { ProfileDto, MyPlan } from './dto';
import {BookmarkResponse, PlanListResponse} from "@/features/community/api/dto";
import {dummyPlanData, dummyMyPlanData, dummyBookmarkData} from "@/features/community/api/dummy";


export const getProfile = async (): Promise<ProfileDto> => {
  const res = await api.get<ProfileDto>("/api/users/profile");
  if(res.data) setUserId(res.data.id);
  return res.data;
};

export const getMyPlan = async (): Promise<MyPlan[]> => {
  const res = await api.get<MyPlan[]>("/api/me/plans");
  return res.data;
}

export const getMeBookmarkedPlan = async (): Promise<BookmarkResponse> => {
  // await api.get<BookmarkResponse>("/api/me/bookmark/plans");
  return dummyBookmarkData
}

export const getMePublicPlan = async (): Promise<PlanListResponse[]> => {
  // await api.get<PlanListResponse>("/api/me/board/plans");
  return dummyPlanData
}