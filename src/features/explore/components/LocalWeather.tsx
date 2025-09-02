'use client';

import { useEffect, useState } from 'react';
import SectionContainer from "@/shared/components/containers/SectionContainer";

export default function LocalWeather() {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const res = await fetch(`/api/kakao/region?lat=${latitude}&lon=${longitude}`);
          const data = await res.json();
          if(!data.error) setAddress(data.addressName);
        } catch (err) {
          console.error(err);
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  return (
    <SectionContainer className="justify-between">
      <div className="flex items-end gap-1">
        <h3>{address}</h3>
        <span className="text-caption text-secondary">반경 3km</span>
      </div>
      <div>
        날씨
      </div>
    </SectionContainer>
  );
}
