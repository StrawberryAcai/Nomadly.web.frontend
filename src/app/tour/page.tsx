'use client'
import {Map} from "react-kakao-maps-sdk";
import useKakaoLoader from "@/shared/hooks/useKakaoLoader";

export default function Page() {
  useKakaoLoader();
  return (
    <section className="h-[calc(100vh-4rem)] w-full">
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        level={3} // 지도의 확대 레벨
        className="h-full w-full"
      />
    </section>
  )
}