// src/server/services/kakao/service.ts
import kakaoInstance from "./client";
import { KakaoRegionCodeResponse } from "./dto";

export async function getRegion(lat: number, lon: number) {
  const res = await kakaoInstance.get<KakaoRegionCodeResponse>(
    "/geo/coord2regioncode.json",
    { params: { x: lon, y: lat, input_coord: "WGS84" } }
  );
  return res.data.documents[0].road_address.address_name;
}
