import { useQuery } from "@tanstack/react-query";
import { getMeLikeBoard } from "../api/queries";
import { MePlanListResponse } from "@/features/community/api/dto";

export function useMyLikeBoardQuery() {
  return useQuery<MePlanListResponse[], Error>({
    queryKey: ["mylike"],
    queryFn: getMeLikeBoard,
    staleTime: 1000 * 60,
    retry: false,
  });
}
