'use client'
import { useState, useEffect } from "react";
import { usePlaceQuery } from "@/features/schedule/user/hooks/usePlaceQuery";
import Title from "@/features/schedule/user/components/Title";
import TextInput from "@/shared/components/inputs/TextInput";
import Search from '@public/icons/search.svg';
import BottomButton from "@/features/schedule/user/components/BottomButton";
import MainContainer from "@/shared/components/containers/MainContainer";

export default function Page() {
  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const [coords, setCoords] = useState<{ longitude: number; latitude: number } | null>(null);

  // 브라우저에서 현재 위치 받아오기
  useEffect(() => {
    if (!coords) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            setCoords({
              longitude: pos.coords.longitude,
              latitude: pos.coords.latitude,
            });
          },
          (err) => {
            // 위치 권한 거부 등 fallback 처리 필요시 여기에 작성
            console.warn("위치 정보를 가져올 수 없습니다.", err);
          }
        );
      }
    }
  }, [coords]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(input);
    }, 400);
    return () => clearTimeout(handler);
  }, [input]);

  const { data, isLoading, isError } = usePlaceQuery(
    debouncedInput,
    coords?.longitude ?? 0,
    coords?.latitude ?? 0,
    !!debouncedInput && !!coords
  );

  // 예시: 데이터 콘솔 출력
  useEffect(() => {
    if (data) {
      console.log("장소 데이터", data);
    }
  }, [data]);

  return (
    <>
      <MainContainer className="">
        <Title title="워케이션 지역을 선택해 주세요" caption="지역을 검색해 보세요.">
          <TextInput
            placeholder="지역을 입력하세요."
            src={Search}
            alt="search"
            className="my-2"
            onChange={e => setInput(e.target.value)}
          />
        </Title>
        {/* 필요시 아래에 결과 렌더링 */}
        {/* {isLoading && <div>로딩중...</div>} */}
        {/* {isError && <div>에러 발생</div>} */}
        {/* {data && <div>{data.place_name}</div>} */}
      </MainContainer>
      <BottomButton isActive={true} />
    </>
  );
}