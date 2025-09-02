// src/server/services/kma/utils.ts

// 격자 변환 상수
const RE = 6371.00877;
const GRID = 5.0;
const SLAT1 = 30.0;
const SLAT2 = 60.0;
const OLON = 126.0;
const OLAT = 38.0;
const XO = 43;
const YO = 136;

export interface LatLng {
  lat: number;
  lng: number;
}

export interface GridXY {
  x: number; // nx
  y: number; // ny
}

export type ConversionCode = 'toXY' | 'toLL';

/**
 * 위도/경도 <-> 격자 좌표(nx, ny) 변환
 */
export function dfsXYConv(code: ConversionCode, v1: number, v2: number): LatLng | GridXY {
  const DEGRAD = Math.PI / 180.0;
  const RADDEG = 180.0 / Math.PI;

  const re = RE / GRID;
  const slat1 = SLAT1 * DEGRAD;
  const slat2 = SLAT2 * DEGRAD;
  const olon = OLON * DEGRAD;
  const olat = OLAT * DEGRAD;

  const sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) /
    Math.log(Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5));
  const sf = (Math.pow(Math.tan(Math.PI * 0.25 + slat1 * 0.5), sn) * Math.cos(slat1)) / sn;
  const ro = (re * sf) / Math.pow(Math.tan(Math.PI * 0.25 + olat * 0.5), sn);

  if (code === 'toXY') {
    const ra = (re * sf) / Math.pow(Math.tan(Math.PI * 0.25 + v1 * DEGRAD * 0.5), sn);
    let theta = v2 * DEGRAD - olon;
    if (theta > Math.PI) theta -= 2.0 * Math.PI;
    if (theta < -Math.PI) theta += 2.0 * Math.PI;
    theta *= sn;

    return {
      x: Math.floor(ra * Math.sin(theta) + XO + 0.5),
      y: Math.floor(ro - ra * Math.cos(theta) + YO + 0.5),
    };
  } else {
    const xn = v1 - XO;
    const yn = ro - v2 + YO;
    const ra = Math.sqrt(xn * xn + yn * yn);
    const alat = 2.0 * Math.atan(Math.pow((re * sf) / ra, 1.0 / sn)) - Math.PI * 0.5;

    let theta = 0;
    if (Math.abs(xn) > 0) theta = Math.atan2(xn, yn);
    const alon = theta / sn + olon;

    return { lat: alat * RADDEG, lng: alon * RADDEG };
  }
}

/**
 * 위도/경도 -> KMA nx, ny
 */
export function convertLatLonToGrid(lat: number, lon: number): { nx: string; ny: string } {
  const grid = dfsXYConv('toXY', lat, lon) as GridXY;
  return { nx: grid.x.toString(), ny: grid.y.toString() };
}
