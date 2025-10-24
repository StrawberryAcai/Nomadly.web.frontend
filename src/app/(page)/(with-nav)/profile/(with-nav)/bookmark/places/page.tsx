"use client";

import MainContainer from "@/shared/components/containers/MainContainer";
import BookmarkCard from "@/features/profile/components/BookmarkCard";
import { getMeBookmarkedPlan } from "@/features/profile/api/queries";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["meBookmarkedPlan"],
    queryFn: getMeBookmarkedPlan,
  });

  if (isLoading) {
    return (
      <MainContainer className="px-4 pb-4">
        <p className="text-gray-500 text-center mt-10">불러오는 중...</p>
      </MainContainer>
    );
  }

  if (isError) {
    return (
      <MainContainer className="px-4 pb-4">
        <p className="text-red-500 text-center mt-10">
          북마크 데이터를 불러오지 못했습니다.
        </p>
      </MainContainer>
    );
  }

  return (
    <MainContainer className="px-4 pb-4">
      {data?.plans.map((bookmark, idx) => (
        <BookmarkCard key={idx} {...bookmark} />
      ))}
    </MainContainer>
  );
}
