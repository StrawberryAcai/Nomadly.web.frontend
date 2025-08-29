import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

const useKakaoLoader = () => {
  useKakaoLoaderOrigin({
    appkey: process.env.NEXT_PUBLIC_KAKAO_API_KEY || "API_KEY",
    libraries: ["clusterer", "drawing", "services"]
  })
}

export default useKakaoLoader;