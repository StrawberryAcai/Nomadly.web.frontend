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

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(input);
    }, 400);
    return () => clearTimeout(handler);
  }, [input]);

  const { data, isLoading, isError } = usePlaceQuery(
    debouncedInput,
    undefined,
    undefined,
    !!debouncedInput
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
        {/* 결과 렌더링 (Figma 스타일) */}
        <div className="flex flex-col gap-4 px-4 py-2 w-full">
          {isLoading && (
            <div className="text-center text-gray-400 py-4">로딩중...</div>
          )}
          {isError && (
            <div className="text-center text-red-400 py-4">에러 발생</div>
          )}
          {data && (
            <div className="flex gap-3 items-center w-full">
              <div className="overflow-clip relative shrink-0 w-[100px] h-[100px]">
                <div
                  className="absolute inset-0 rounded-[12px] bg-cover bg-center"
                  style={{ backgroundImage: `url('${data.image}')` }}
                />
              </div>
              <div className="flex flex-col gap-1 items-start justify-center">
                <div className="font-medium text-[#111] text-[18px] leading-6">
                  {data.place_name}
                </div>
                <div className="font-light text-[#aaa] text-[12px] leading-4">
                  {data.address}
                </div>
                <div className="font-light text-[#aaa] text-[12px] leading-4">
                  평점: {data.rating} / 북마크: {data.bookmark_cnt} / 거리: {data.distance}m
                </div>
              </div>
            </div>
          )}
        </div>
      </MainContainer>
      <BottomButton isActive={true} />
    </>
  );
}