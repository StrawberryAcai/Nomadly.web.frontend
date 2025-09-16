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
	longitude: number,
	latitude: number
): Promise<PlaceDetailDto> => {
	const encodedName = encodeURIComponent(placeName);
	const res = await api.get<PlaceDetailDto>(
		`/api/locations/place/${encodedName}?longitude=${longitude}&latitude=${latitude}`
	);
	return res.data;
};
