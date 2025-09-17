'use client'
import React from 'react';
import CardContainer from "@/shared/components/containers/CardContainer";
import { usePlaceSuggestQuery } from '@/shared/hooks/usePlaceSuggestQuery';

interface SuggestListProps {
  type: string;
  longitude: number;
  latitude: number;
}

const SuggestList: React.FC<SuggestListProps> = ({ type, longitude, latitude }) => {
  const { data, isLoading, isError } = usePlaceSuggestQuery({ type, origin: { longitude, latitude } }, true);
  return (
    <section className="flex flex-col gap-3">
      <h3 className="px-4">🍀 이번 여행은 여기 어때요?</h3>
      <div className="flex flex-nowrap overflow-x-auto gap-8 px-4">
        {isLoading && <div>로딩중...</div>}
        {isError && <div>에러 발생</div>}
        {data && data.items.map((item) => (
          <CardContainer
            key={item.place_id}
            id={item.place_id}
            isLarge={true}
            title={item.place_name}
            score={item.rating}
            bookmark={item.bookmark_cnt}
            distance={item.distance}
            trend={item.trend}
            url={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default SuggestList;