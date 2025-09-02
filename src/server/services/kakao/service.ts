// src/server/services/kakao/service.ts
import axiosInstance from "@/shared/lib/axiosInstance";
import { KakaoRegionCodeResponse } from "@/server/services/kakao/dto";

export async function getRegion(lat: number, lon: number) {
  const res = await axiosInstance.get<KakaoRegionCodeResponse>(
    "/geo/coord2regioncode.json",
    { params: { x: lon, y: lat, input_coord: "WGS84" } }
  );
  return res.data.documents[0].road_address.address_name;
}
