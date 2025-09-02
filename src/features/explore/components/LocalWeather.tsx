'use client';

import { useEffect, useState } from 'react';

export default function LocalWeather() {
  const [address, setAddress] = useState<string | null>(null);
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
          const res = await fetch(`/api/kakao/region?lat=${latitude}&lon=${longitude}`);
          const data = await res.json();

          if (data.error) {
            setError(data.error);
          } else {
            setAddress(data.addressName);
            console.log('Region data:', data.addressName);
          }
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
      ) : address ? (
        <p>현재 위치: {address}</p>
      ) : (
        <p>위치 정보를 가져오는 중...</p>
      )}
    </div>
  );
}
