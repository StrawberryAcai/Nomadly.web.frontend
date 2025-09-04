import React from 'react';
import PlanItem from "@/features/community/components/PlanItem";


const ReviewList: React.FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <PlanItem id={1} url={"https://i.namu.wiki/i/Z41qK_Jp4TYWr7IaMOcgrRmtTF_F7qWX5ugdrTDjAHZPkvrf8ahJZYmWC-6cmaS1kgPrsV4UgzgxVNigvN9Uml2-5Vq5Oa-LLuNdMqAglZs1pG7ArNSN2Mzsvdewm5KjCTfJdteQyYDGl9njSF6_WQ.webp"}
                title={"여기 감자탕 너무 맛있어요!"} content={"test"} like={1000} isLiked={true} bookmark={230} isBookmarked={false} />
    </section>
  )
}

export default ReviewList;