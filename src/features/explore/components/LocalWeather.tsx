"use client";

import { useEffect, useState } from "react";
import SectionContainer from "@/shared/components/containers/SectionContainer";
import { useRegionQuery, useWeatherQuery } from "@/features/explore/api/queries";

export default function LocalWeather() {
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (err) => console.error(err)
    );
  }, []);

  const { data: region, isLoading: regionLoading } = useRegionQuery(coords?.lat ?? null, coords?.lon ?? null);
  const { data: weather, isLoading: weatherLoading } = useWeatherQuery(coords?.lat ?? null, coords?.lon ?? null);

  return (
    <SectionContainer className="justify-between">
      <div className="flex items-end gap-1">
        {regionLoading ? (
          <h3>---</h3>
        ) : (
          <>
            <h3>{region?.addressName}</h3>
            <span className="text-caption text-secondary">반경 3km</span>
          </>
        )}
      </div>
      <div>
        {weatherLoading ? (
          <h3>---</h3>
        ) : (
          weather && <h3>{weather.temperature}{weather.unit}</h3>
        )}
      </div>
    </SectionContainer>
  );
}
