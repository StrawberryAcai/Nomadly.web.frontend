'use client';
import React from 'react';
import BookmarkButton from "@/shared/components/inputs/BookmarkButton";
import DistanceContainer from "@/shared/components/containers/DistanceContainer";
import { useBookmark } from '@/shared/hooks/useBookmark';

interface CardContainerProps {
    title: string;
    score: number;
    bookmark: number;
    id: string;
    distance: number;
    url: string;
    isLarge?: boolean;
    trend: boolean;
}

const CardContainer: React.FC<CardContainerProps> = ({
                                                         title,
                                                         score,
                                                         bookmark,
                                                         id,
                                                         distance,
                                                         url,
                                                         isLarge,
                                                         trend,
                                                     }) => {
    const { bookmarkData, handleBookmarkClick } = useBookmark(id);

    return (
        <article
            className={(isLarge ? "aspect-[3/4] w-[12.5rem]" : "aspect-square w-[9.375rem]") +
                " bg-black bg-center bg-cover p-3 flex flex-col justify-between rounded-xl flex-none"}
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${url})`,
            }}
        >
            <header className="flex flex-col">
                <span className="text-body-lg text-white">{title}</span>
                <span className="text-caption text-secondary">
          {score} · {trend && "방문객 증가 중"}
        </span>
            </header>
            <footer className="flex flex-row justify-between">
                <BookmarkButton
                    count={bookmark}
                    isBookmark={bookmarkData?.is_bookmarked ?? false}
                    onClick={handleBookmarkClick}
                />
                <DistanceContainer distance={distance} />
            </footer>
        </article>
    );
};

export default CardContainer;
