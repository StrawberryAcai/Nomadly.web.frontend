import api from '@/shared/lib/axiosInstance';
import { PlaceDetailDto } from './dto';

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
