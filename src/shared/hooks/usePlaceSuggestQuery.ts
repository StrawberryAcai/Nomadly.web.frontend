import { useQuery } from '@tanstack/react-query';
import { getPlaceSuggest } from '@/shared/api/queries';
import { PlaceSuggestRequest, PlaceSuggestResponse } from '@/shared/api/dto';

export function usePlaceSuggestQuery(params: PlaceSuggestRequest, enabled: boolean = true) {
  return useQuery<PlaceSuggestResponse>({
    queryKey: ['place-suggest', params],
    queryFn: () => getPlaceSuggest(params),
    enabled,
    staleTime: 1000 * 60, // 1분
  });
}
