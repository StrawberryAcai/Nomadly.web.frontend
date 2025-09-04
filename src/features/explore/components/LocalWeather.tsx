"use client";

import { useEffect, useState } from "react";
import SectionContainer from "@/shared/components/containers/SectionContainer";
import { fetchRegion, fetchWeather } from "@/features/weather/api/queries";
import { WeatherResponse } from "@/features/weather/api/dto";

export default function LocalWeather() {
  const [address, setAddress] = useState<string | null>(null);
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const regionData = await fetchRegion(latitude, longitude);
          if (!regionData.error) setAddress(regionData.addressName);

          const weatherData = await fetchWeather(latitude, longitude);
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
