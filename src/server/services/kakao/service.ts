import kakaoInstance from "./client";
import { KakaoRegionResponse } from "./dto";

const normalizeAddress = (address: string) => address.replace(/(광역시|특별시)/, "");

export async function getRegion(lat: number, lon: number) {
  const res = await kakaoInstance.get<KakaoRegionResponse>(
    "/geo/coord2regioncode.json",
    { params: { x: lon, y: lat, input_coord: "WGS84" } }
  );
  return normalizeAddress(res.data.documents[0].region_1depth_name);
}
