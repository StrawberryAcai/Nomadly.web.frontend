'use client'
import React from 'react';
import LikeButton from '@/shared/components/inputs/LikeButton';
import BookmarkButton from '@/shared/components/inputs/BookmarkButton';
import { PlanItem as PlanItemProps } from '@/features/community/api/dto';
import { usePlanAction } from '@/features/community/api/mutations';
import Image from "next/image";
import Link from "next/link";

const PlanItem: React.FC<PlanItemProps> = (plan) => {
  const tempUrl = "https://i.namu.wiki/i/Z41qK_Jp4TYWr7IaMOcgrRmtTF_F7qWX5ugdrTDjAHZPkvrf8ahJZYmWC-6cmaS1kgPrsV4UgzgxVNigvN9Uml2-5Vq5Oa-LLuNdMqAglZs1pG7ArNSN2Mzsvdewm5KjCTfJdteQyYDGl9njSF6_WQ.webp";
  const likeMutation = usePlanAction(plan, 'like');
  const bookmarkMutation = usePlanAction(plan, 'bookmark');

  return (
    <Link href={`/plan?plan_id=${plan.board_id}`} className="px-6 py-2 flex gap-2 justify-between">
      <div className="h-[6.75rem] flex flex-col justify-between">
        <div>
          <h4>{plan.title}</h4>
          <p className="text-body-md text-secondary">
            {plan.content.length > 40 ? plan.content.slice(0, 40) + '...' : plan.content}
          </p>
        </div>
        <div className="flex px-2 gap-4">
          <LikeButton count={plan.liked} isLiked={plan.is_liked} onClick={() => likeMutation.mutate()} />
          {/*<BookmarkButton count={plan.bookmark} isBookmark={plan.is_bookmarked} onClick={() => bookmarkMutation.mutate()} />*/}
        </div>
      </div>
      <Image src={tempUrl} alt="img" width={100} height={100} className="rounded-md min-h-25 max-h-25 min-w-25 max-w-25" />
    </Link>
  );
};

export default PlanItem;
