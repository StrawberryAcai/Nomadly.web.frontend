"use client";
import { BookmarkItem } from "@/features/community/api/dto";
import { usePlaceQuery } from "@/features/schedule/user/hooks/usePlaceQuery";
import CardContainer from "@/shared/components/containers/CardContainer";
import React from "react";


const BookmarkCard: React.FC<BookmarkItem> = (bookmark) => {
  const { data, isLoading, isError } = usePlaceQuery(bookmark.name);
  return (
    <CardContainer
      title={bookmark.name}
      score={bookmark.overall_rating}
      bookmark={bookmark.overall_bookmark}
      id={bookmark.place_id}
      url={data?.image}
      isBookmark={true}
    ></CardContainer>
  );
};

export default BookmarkCard;