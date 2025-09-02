'use client';

import {useEffect, useState} from 'react';
import { getRegion } from '@/server/services/kakao/service';

export default function LocalWeather() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('브라우저에서 위치 정보를 지원하지 않습니다.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const region = await getRegion(latitude, longitude);
          console.log('Region data:', region);
        } catch (err) {
          console.error(err);
          setError('지역 정보를 가져오는 데 실패했습니다.');
        }
      },
      (err) => {
        console.error(err);
        setError('위치 정보 제공을 허용하지 않았습니다.');
      }
    );
  }, []);

  return (
    <div className="p-4 bg-gray-50 border rounded-md">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p>현재 위치 정보를 콘솔에서 확인하세요.</p>
      )}
    </div>
  );
}
