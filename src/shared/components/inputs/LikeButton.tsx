import React from 'react';
import Image from "next/image";

import Like from '@public/icons/button/like/like.svg';
import LikeP from '@public/icons/button/like/like_p.svg';

const formatCount = (count: number): string => {
  if (count < 1000) return count.toString();
  if (count < 1_000_000) return (count / 1000).toFixed(1) + "k";
  return (count / 1_000_000).toFixed(1) + "M";
};

interface BookmarkButtonProps {
  onClick?: () => void;
  count: number;
  isLiked: boolean;
}
const BookmarkButton: React.FC<BookmarkButtonProps> = ({onClick, count, isLiked}) => {
  return (
    <div onClick={onClick} className="h-8 flex flex-row gap-1 py-2 items-center">
      <Image src={isLiked? LikeP : Like} alt="Bookmark icon" />
      <span className={`text-caption ${isLiked ? "text-[#0A66FF]" : "text-secondary"}`}>{formatCount(count)}</span>
    </div>
  )
}

export default BookmarkButton;