import MainContainer from "@/shared/components/containers/MainContainer";
import TopBar from "@/shared/components/TopBar";
import { NextPage } from "next";
import { getPlanDetail } from "@/features/community/api/queries";
import PlanContext from "@/features/community/detail/components/PlanContext";


interface CDetailProps {
  searchParams: { plan_id?: number };
}
const Page: NextPage<CDetailProps> = async ({searchParams}) => {
  const data = await getPlanDetail(searchParams.plan_id);
  return (
    <MainContainer>
      <TopBar>
        <span>커뮤니티</span>
        <div className="w-6 h-6"/>
      </TopBar>
      {data && <>
        <PlanContext title={data.title}
                   avg_rate={data.avg_rate}
                   comment={data.comment}
                   content={data.content} />

      </>}
    </MainContainer>
  )
}

export default Page;