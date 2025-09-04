import React from "react";
import LikeButton from "@/shared/components/inputs/LikeButton";
import BookmarkButton from "@/shared/components/inputs/BookmarkButton";

function truncateText(text: string, maxLength = 40): string {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}
interface ReviewItemProps {
  id: number;
  url: string;
  title: string;
  content: string;
  like: number;
  is_liked: boolean;
  bookmark: number;
  is_bookmarked: boolean;
}
const PlanItem: React.FC<ReviewItemProps> = (props) => {
  const {id, url, title, content, like, is_liked, bookmark, is_bookmarked} = props;
  return (
    <article className="px-6 py-2 flex gap-2 justify-between">
      <div className="h-[6.75rem] flex flex-col justify-between">
        <div>
          <h4>{title}</h4>
          <p className="text-body-md text-secondary">{truncateText(content)}</p>
        </div>
        <div className="flex px-2 gap-4">
          <LikeButton count={like} isLiked={is_liked} />
          <BookmarkButton count={bookmark} isBookmark={is_bookmarked} />
        </div>
      </div>
      <div className={"w-25 h-25 min-w-25 min-h-25 bg-cover rounded-md"} style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${url})`}} />
    </article>
  )
}

export default PlanItem;