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
                const res = await api.get<BookmarkResponse>(
                    `/api/locations/bookmark/${id}/${getUserId() ?? ''}`
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
            const payload = {
                place_id: id,
                user_id: getUserId() ?? '',
            };
            if (isBookmarked) {
                return api.delete(`/api/locations/bookmark`, { data: payload });
            } else {
                return api.post(`/api/locations/bookmark`, payload);
            }
        },
        onSuccess: (_, isBookmarked) => {
            setBookmarkData({
                place_id: id,
                user_id: getUserId() ?? '',
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
