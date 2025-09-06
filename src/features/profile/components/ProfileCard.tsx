'use client'
import React, {useEffect} from 'react';
import Image from "next/image";
import RightArrow from '@public/icons/arrow/right_arrow.svg';
import {useProfileQuery} from "@/features/profile/hooks/useProfileQuery";
import {logout} from "@/shared/lib/axiosInstance";

const ProfileCard: React.FC = () => {
  const tempUrl = "https://i.namu.wiki/i/Z41qK_Jp4TYWr7IaMOcgrRmtTF_F7qWX5ugdrTDjAHZPkvrf8ahJZYmWC-6cmaS1kgPrsV4UgzgxVNigvN9Uml2-5Vq5Oa-LLuNdMqAglZs1pG7ArNSN2Mzsvdewm5KjCTfJdteQyYDGl9njSF6_WQ.webp";
  const {data} = useProfileQuery();
  return (
    <section className="pt-1 px-4">
      <div className="h-18 border-outline border-1 rounded-xl p-3 flex gap-2 items-center">
        {data && <>
        <Image src={tempUrl} alt="img" width={48} height={48} className="rounded-full max-w-12 min-w-12 max-h-12 min-h-12" />
        <div className="flex-1 flex flex-col">
          <span className="text-body-md">{data.username}</span>
          <span className="text-caption text-secondary">{data.profile}</span>
        </div>
        </>}
        <Image src={RightArrow} alt="right_arrow" />
        <button onClick={()=> {logout()}}>로그아웃</button>
      </div>
    </section>
  )
}

export default ProfileCard;