"use client";
import React, { useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import useKakaoLoader from "@/shared/hooks/useKakaoLoader";

export default function Page() {
  useKakaoLoader();

  const [center, setCenter] = useState({ lat: 33.450701, lng: 126.570667 });
  const [watchId, setWatchId] = useState<number | null>(null);

  const startTracking = () => {
    if (!navigator.geolocation) {
      alert("이 브라우저는 GPS를 지원하지 않습니다.");
      return;
    }

    const id = navigator.geolocation.watchPosition(
      (pos) => {
        setCenter({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        console.error(err);
        alert("위치 정보를 가져올 수 없습니다.");
      },
      { enableHighAccuracy: true }
    );

    setWatchId(id);
  };

  const stopTracking = () => {
    if (watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
      setWatchId(null);
    }
  };

  return (
    <section className="h-[calc(100vh-4rem)] w-full relative">
      <Map
        id="map"
        center={center}
        level={3}
        className="h-full w-full"
      />
      <div className="absolute top-4 left-4 flex gap-2 z-999">
        <button
          onClick={startTracking}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          위치 추적 시작
        </button>
        <button
          onClick={stopTracking}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          추적 중지
        </button>
      </div>
    </section>
  );
}
