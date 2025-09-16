import api from '@/shared/lib/axiosInstance';
import { PlaceSuggestRequest, PlaceSuggestResponse } from './dto';

// 장소 추천 리스트 요청
export const getPlaceSuggest = async (
  params: PlaceSuggestRequest
): Promise<PlaceSuggestResponse> => {
  const res = await api.post<PlaceSuggestResponse>('/api/locations', params);
  return res.data;
};
