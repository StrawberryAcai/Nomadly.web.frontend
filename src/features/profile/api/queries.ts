import api from '@/shared/lib/axiosInstance';
import { ProfileDto } from './dto';

export const getProfile = async (): Promise<ProfileDto> => {
  const res = await api.get<ProfileDto>("/api/users/profile");
  return res.data;
};
