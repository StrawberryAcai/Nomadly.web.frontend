'use client';
import { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import api, { getUserId } from '@/shared/lib/axiosInstance';
import { useDebounceFn } from '@/shared/hooks/useDebounceFn';

export interface BookmarkResponse {
  place_id: string;
  user_id: string;
  is_bookmarked: boolean;
}

export function useBookmark(id: string) {
  const [bookmarkData, setBookmarkData] = useState<BookmarkResponse | null>(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    const fetchBookmark = async () => {
      try {
        const userId = await getUserId();
        if (userId === null) throw new Error();
        const res = await api.get<BookmarkResponse>(
          `/api/locations/bookmark/${id}/${userId}`
        );
        setBookmarkData(res.data);
      } catch {
        setBookmarkData(null);
      }
    };
    fetchBookmark();
  }, [id]);

  const bookmarkMutation = useMutation({
    mutationFn: async (isBookmarked: boolean) => {
      const userId = await getUserId();
      const payload = {
        place_id: id,
        user_id: userId ?? '',
      };
      if (isBookmarked) {
        return api.delete(`/api/locations/bookmark/`, { data: payload });
      } else {
        return api.post(`/api/locations/bookmark/`, payload);
      }
    },
    onSuccess: async (_, isBookmarked) => {
      const userId = await getUserId();
      setBookmarkData({
        place_id: id,
        user_id: userId ?? '',
        is_bookmarked: !isBookmarked,
      });
      queryClient.invalidateQueries({ queryKey: ['bookmark', id] });
    },
  });

  const handleBookmarkClick = useDebounceFn(() => {
    if (bookmarkData) {
      bookmarkMutation.mutate(bookmarkData.is_bookmarked);
    }
  }, 500);

  return { bookmarkData, handleBookmarkClick };
}
