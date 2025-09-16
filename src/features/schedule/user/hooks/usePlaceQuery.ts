import { useQuery } from '@tanstack/react-query';
import { getPlaceDetail } from '../api/queries';
import { PlaceDetailDto } from '../api/dto';

/**
 * 장소 상세정보를 가져오는 React Query 훅
 * @param placeName 장소 이름
 * @param longitude 경도
 * @param latitude 위도
 * @param enabled 쿼리 활성화 여부
 */
export function usePlaceQuery(
	placeName: string,
	longitude?: number,
	latitude?: number,
	enabled: boolean = true
): {
	data?: PlaceDetailDto;
	isLoading: boolean;
	isError: boolean;
	error: unknown;
} {
	const query = useQuery({
		queryKey: ['place-detail', placeName, longitude, latitude],
		queryFn: () => getPlaceDetail(placeName, longitude, latitude),
		enabled: enabled && !!placeName,
		staleTime: 1000 * 60, // 1분
	});
	return {
		data: query.data,
		isLoading: query.isLoading,
		isError: query.isError,
		error: query.error,
	};
}
