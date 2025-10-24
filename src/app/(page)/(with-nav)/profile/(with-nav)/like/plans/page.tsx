"use client";
import LikePlanItem from "@/features/profile/components/LikePlanItem";
import { useMyLikeBoardQuery } from "@/features/profile/hooks/useMyLikeBoardQuery";
import MainContainer from "@/shared/components/containers/MainContainer";

export default function Page() {
  const {data, isLoading, isError} = useMyLikeBoardQuery();
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
          좋아요한 일정을 불러오지 못했습니다.
        </p>
      </MainContainer>
    );
  }

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <MainContainer className="px-4 pb-4">
        <p className="text-gray-400 text-center mt-10">
          좋아요한 일정이 없습니다.
        </p>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <section className="flex flex-col gap-4">
        {data?.map((plan) => <LikePlanItem key={plan.board_id} {...plan} />)}
      </section>
    </MainContainer>
  );
}
