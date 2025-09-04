import React from 'react';
import Image from "next/image";

import Bookmark from '@public/icons/button/bookmark/bookmark.svg';
import BookmarkP from '@public/icons/button/bookmark/bookmark_p.svg';

const formatCount = (count: number): string => {
  if (count < 1000) return count.toString();
  if (count < 1_000_000) return (count / 1000).toFixed(1) + "k";
  return (count / 1_000_000).toFixed(1) + "M";
};

interface BookmarkButtonProps {
  onClick?: () => void;
  count: number;
  isBookmark: boolean;
}
const BookmarkButton: React.FC<BookmarkButtonProps> = ({onClick, count, isBookmark}) => {
  return (
    <div onClick={onClick} className="h-8 flex flex-row gap-1 py-2 items-center">
      <Image src={isBookmark? BookmarkP : Bookmark} alt="Bookmark icon" />
      <span className={`text-caption ${isBookmark ? "text-[#EAB308]" : "text-secondary"}`}>{formatCount(count)}</span>
    </div>
  )
}

export default BookmarkButton;