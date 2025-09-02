// src/server/services/kakao/service.ts
import kakaoInstance from "./client";
import { KakaoRegionResponse } from "./dto";

export async function getRegion(lat: number, lon: number) {
  const res = await kakaoInstance.get<KakaoRegionResponse>(
    "/geo/coord2regioncode.json",
    { params: { x: lon, y: lat, input_coord: "WGS84" } }
  );
  return res.data.documents[0].address_name;
}
