import axios from "axios";

const kakaoInstance = axios.create({
  baseURL: "https://dapi.kakao.com/v2/local",
  headers: {
    Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
    "Content-Type": "application/json",
  }
})

export default kakaoInstance;