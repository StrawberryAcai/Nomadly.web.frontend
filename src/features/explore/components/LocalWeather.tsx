'use client';

import { useEffect } from 'react';
import { getRegion } from '@/server/services/kakao/service';

interface RegionLoggerProps {
  lat: number;
  lon: number;
}

export default function RegionLogger({ lat, lon }: RegionLoggerProps) {
  useEffect(() => {
    async function fetchRegion() {
      try {
        const region = await getRegion(lat, lon);
        console.log('Region data:', region);
      } catch (error) {
        console.error('Failed to fetch region:', error);
      }
    }

    fetchRegion();
  }, [lat, lon]);

  return (
    <div className="p-4 bg-gray-50 border rounded-md">
      <p>위치 정보를 콘솔에서 확인하세요.</p>
    </div>
  );
}
