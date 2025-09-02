// src/server/services/kakao/dto.ts

export interface KakaoRegionDocument {
  region_type: string;          // "B" 또는 "H"
  code: string;                 // 행정/법정 코드
  address_name: string;         // 전체 주소
  region_1depth_name: string;   // 시/도
  region_2depth_name: string;   // 시/군/구
  region_3depth_name: string;   // 읍/면/동
  region_4depth_name: string;   // 상세 주소 (없으면 빈 문자열)
  x: number;                    // 경도
  y: number;                    // 위도
}

export interface KakaoRegionResponse {
  meta: {
    total_count: number;        // 문서 수
  };
  documents: KakaoRegionDocument[];
}
