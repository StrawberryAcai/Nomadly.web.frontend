'use client';

import { useQuery } from '@tanstack/react-query';
import { getMeBookmarkedPlan, getProfile } from '@/features/profile/api/queries';
import { BookmarkResponse } from '@/features/community/api/dto';

export const useBookmarkListQuery = () => {
  return useQuery<BookmarkResponse>({
    queryKey: ['BookmarkList'],
    queryFn: getMeBookmarkedPlan,
    retry: false,
    staleTime: 1000 * 60,
  });
};
