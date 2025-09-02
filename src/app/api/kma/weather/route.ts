import { NextRequest, NextResponse } from 'next/server';
import { getWeather } from '@/server/services/kma/service';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const lat = url.searchParams.get('lat');
    const lon = url.searchParams.get('lon');

    if (!lat || !lon) {
      return NextResponse.json(
        { error: '위도(lat)와 경도(lon)를 모두 제공해야 합니다.' },
        { status: 400 }
      );
    }

    const weather = await getWeather(parseFloat(lat), parseFloat(lon));

    return NextResponse.json(weather);
  } catch (error) {
    console.error('API 호출 오류:', error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
