import api from '@/shared/lib/axiosInstance';
import { PlaceDetailDto } from './dto';
import { TravelState } from '@/shared/store/useTravelStore';

// PlanResponse 타입 정의
export type PlanItem = {
  todo: string;
  place: string;
  time: string;
};

export type PlanResponse = {
  start_date: string;
  end_date: string;
  plan: PlanItem[][];
};

export async function getPlan(store: TravelState): Promise<PlanResponse> {
  if(store.bookmarked.length === 0) store.bookmarked = [store.destination];
  const res = await api.post<PlanResponse>("/api/plan", store);
  return res.data;
}
/**
 * 장소 상세 정보 조회
 * @param placeName 장소 이름 (예: '스타벅스 강남점')
 * @param longitude 경도 (예: 127.0276)
 * @param latitude 위도 (예: 37.4979)
 */
export const getPlaceDetail = async (
    placeName: string,
    longitude?: number,
    latitude?: number
): Promise<PlaceDetailDto> => {
    const encodedName = encodeURIComponent(placeName);
    let url = `/api/locations/place/${encodedName}`;
    const params: string[] = [];
    if (longitude !== undefined) params.push(`longitude=${longitude}`);
    if (latitude !== undefined) params.push(`latitude=${latitude}`);
    if (params.length > 0) url += `?${params.join("&")}`;
    const res = await api.get<PlaceDetailDto>(url);
    return res.data;
};
