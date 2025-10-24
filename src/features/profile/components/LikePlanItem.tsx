'use client'
import React from 'react';
import LikeButton from '@/shared/components/inputs/LikeButton';
import { MePlanListResponse, PlanItem as PlanItemProps } from '@/features/community/api/dto';
import { useLikeAction } from '@/features/community/api/mutations';
import Image from "next/image";
import Link from "next/link";
import Like from '@public/icons/button/like/like.svg';

const LikePlanItem: React.FC<MePlanListResponse> = (plan) => {
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
          <div className="h-8 flex flex-row gap-1 py-2 items-center">
            <Image src={Like} alt="Bookmark icon" />
            <span className={`text-caption text-secondary`}>{plan.likes}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LikePlanItem;
