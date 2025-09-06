'use client';

import { useQuery } from '@tanstack/react-query';
import { getProfile } from '@/features/profile/api/queries';
import { ProfileDto } from '@/features/profile/api/dto';

export const useProfileQuery = () => {
  return useQuery<ProfileDto>({
    queryKey: ['profile'],
    queryFn: getProfile,
    retry: false,
    staleTime: 1000 * 60,
  });
};
