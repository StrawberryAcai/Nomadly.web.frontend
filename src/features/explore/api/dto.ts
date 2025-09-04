export interface RegionResponse {
  addressName: string;
  error?: string;
}

export interface WeatherResponse {
  temperature: number;
  unit: string;
  location: string;
  error?: string;
}