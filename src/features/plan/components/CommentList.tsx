import React from 'react';
import SectionContainer from "@/shared/components/containers/SectionContainer";
import Image from "next/image";

import ProfileIcon from "@public/icons/profile.svg";
import RateIcon from "@public/icons/rate.svg";

interface CommentProps {
  content: string;
  rate: number;
}
const CommentItem: React.FC<CommentProps> = ({content, rate}) => {
  return (
    <article className="flex gap-2.5 pr-6 py-2">
      <div className="flex flex-col gap-0.5 min-w-6">
        <Image src={ProfileIcon} alt="profile" width={24} height={24} />
        <span className="text-secondary text-caption flex"><Image src={RateIcon} alt="rate" width={16} height={16} />{rate}</span>
      </div>
      <p>{content}</p>
    </article>
  )
}

interface CommentListProps {
  comments: CommentProps[];
}
const CommentList: React.FC<CommentListProps> = ({comments}) => {
  return (
    <SectionContainer className="flex-col gap-2.5">
      <h3>댓글</h3>
      <div className="flex flex-col">
      {comments.map((comment, index) => <CommentItem key={index} {...comment} />)}
      </div>
    </SectionContainer>
  )
}

export default CommentList;