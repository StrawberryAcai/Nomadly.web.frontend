'use client';

import { useEffect, useState } from 'react';
import SectionContainer from "@/shared/components/containers/SectionContainer";

interface Weather {
  temperature: number;
  unit: string;
  location: string;
}

export default function LocalWeather() {
  const [address, setAddress] = useState<string | null>(null);
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // Kakao 지역 이름
          const regionRes = await fetch(`/api/kakao/region?lat=${latitude}&lon=${longitude}`);
          const regionData = await regionRes.json();
          if (!regionData.error) setAddress(regionData.addressName);
          // KMA 날씨
          const weatherRes = await fetch(`/api/kma/weather?lat=${latitude}&lon=${longitude}`);
          const weatherData = await weatherRes.json();
          if (!weatherData.error) setWeather(weatherData);

        } catch (err) {
          console.error(err);
        }
      },
      (err) => console.error(err)
    );
  }, []);

  return (
    <SectionContainer className="justify-between">
      <div className="flex items-end gap-1">
        <h3>{address}</h3>
        <span className="text-caption text-secondary">반경 3km</span>
      </div>
      <div>
        {weather && <h3>{weather.temperature}{weather.unit}</h3>}
      </div>
    </SectionContainer>
  );
}
