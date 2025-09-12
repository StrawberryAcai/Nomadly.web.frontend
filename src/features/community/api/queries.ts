import { PlanListResponse, PlanListRequest, PlanDetailResponse } from "./dto";
import api from "@/shared/lib/axiosInstance";

export const getPlanList = async (params?: PlanListRequest): Promise<PlanListResponse[]> => {
  if (params?.keyword) return await api.get(`/api/board?keyword=${params?.keyword}`).then((res) => res.data);
  return await api.get("/api/board").then((res) => res.data);
};

export const getPlanDetail = async (plan_id: number | undefined): Promise<PlanDetailResponse | null> => {
  if(undefined === plan_id) return null;
  return await api.get(`/api/board/${plan_id}}`).then((res) => res.data);
};