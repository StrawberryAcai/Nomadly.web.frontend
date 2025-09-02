// src/server/services/kma/service.ts
import { KmaWeatherItem, KmaWeatherResponse } from './dto';
import { kmaInstance } from './client';
import { convertLatLonToGrid } from './utils';
import moment from 'moment-timezone';

process.env.TZ = 'Asia/Seoul';

const timeRanges = [
  { startTime: '00:01', endTime: '03:00', baseTime: 23 },
  { startTime: '03:01', endTime: '06:00', baseTime: 2 },
  { startTime: '06:01', endTime: '09:00', baseTime: 5 },
  { startTime: '09:01', endTime: '12:00', baseTime: 8 },
  { startTime: '12:01', endTime: '15:00', baseTime: 11 },
  { startTime: '15:01', endTime: '18:00', baseTime: 14 },
  { startTime: '18:01', endTime: '21:00', baseTime: 17 },
  { startTime: '21:01', endTime: '00:00', baseTime: 20 },
];

function getBaseDateTime() {
  let now = moment.tz('Asia/Seoul');

  // 00:01 ~ 03:00이면 전날로 변경
  if (now.isBetween(moment.tz('00:01', 'HH:mm', 'Asia/Seoul'), moment.tz('03:00', 'HH:mm', 'Asia/Seoul'))) {
    now = now.subtract(1, 'day');
  }

  let baseTime = '0200';
  for (const range of timeRanges) {
    const start = moment.tz(range.startTime, 'HH:mm', 'Asia/Seoul');
    const end = moment.tz(range.endTime, 'HH:mm', 'Asia/Seoul');
    if (now.isBetween(start, end, undefined, '[]')) {
      baseTime = range.baseTime.toString().padStart(2, '0') + '00';
      break;
    }
  }

  const baseDate = now.format('YYYYMMDD');
  return { baseDate, baseTime };
}

export async function getWeather(lat: number, lon: number): Promise<KmaWeatherResponse> {
  try {
    const { nx, ny } = convertLatLonToGrid(lat, lon);
    const { baseDate, baseTime } = getBaseDateTime();

    const { data } = await kmaInstance.get('', {
      params: {
        serviceKey: process.env.KMA_SERVICE_KEY,
        numOfRows: '10',
        dataType: 'JSON',
        base_date: baseDate,
        base_time: baseTime,
        nx,
        ny,
      },
    });

    const temperatureItem = data.response.body.items.item.find(
      (item: KmaWeatherItem) => item.category === 'TMP'
    );

    if (!temperatureItem) throw new Error('온도 정보를 찾을 수 없습니다.');

    const temperature = parseFloat(temperatureItem.fcstValue);
    return {
      temperature,
      unit: '°C',
      location: `위도: ${lat}, 경도: ${lon} (nx:${nx}, ny:${ny})`,
    };
  } catch (error) {
    console.error('기상청 API 호출 오류:', error);
    throw new Error('날씨 정보를 가져오는 데 실패했습니다.');
  }
}
