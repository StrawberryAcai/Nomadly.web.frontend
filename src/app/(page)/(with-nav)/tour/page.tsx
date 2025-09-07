"use client";
import React, {useEffect, useState} from "react";
import {Map, MapMarker} from "react-kakao-maps-sdk";
import useKakaoLoader from "@/shared/hooks/useKakaoLoader";

import Pos from '@public/icons/button/map/pos.svg';
import PosPrimary from "@public/icons/button/map/pos_primary.svg";
import Image from "next/image";

export default function Page() {
  useKakaoLoader();
  const [toggle, setToggle] = useState<boolean>(false);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [watchId, setWatchId] = useState<number | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("이 브라우저는 GPS를 지원하지 않습니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
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
  }, []);

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

  useEffect(() => {
    if(toggle) startTracking();
    else stopTracking();
  },[toggle]);

  return (
    <section className="flex-1 flex relative">
      <Map
        id="map"
        center={center}
        level={3}
        className="flex-1"
      >
        <MapMarker position={center} />
      </Map>
        <button className="w-11 h-11 rounded-full absolute right-6 bottom-2.5 bg-background z-999"
                onClick={()=>setToggle(!toggle)}>
          <Image src={toggle?PosPrimary:Pos} alt="pos" className="m-auto" />
        </button>
    </section>
  );
}
