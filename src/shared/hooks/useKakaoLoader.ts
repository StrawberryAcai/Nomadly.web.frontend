import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

const useKakaoLoader = () => {
  useKakaoLoaderOrigin({
    appkey: process.env.KAKAO_API_KEY || "",
    libraries: ["clusterer", "drawing", "services"]
  })
}

export default useKakaoLoader;