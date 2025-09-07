import MainContainer from "@/shared/components/containers/MainContainer";
import TopBar from "@/shared/components/layout/TopBar";
import { NextPage } from "next";
import { getPlanDetail } from "@/features/community/api/queries";
import PlanContext from "@/features/plan/components/PlanContext";
import CommentList from "@/features/plan/components/CommentList";
import SectionContainer from "@/shared/components/containers/SectionContainer";
import ToggleSpan from "@/features/plan/components/ToggleSpan";

function formatTo12Hour(dateStr: string): string {
  const isoStr = dateStr.replace(/-/g, (m, i) => (i < 10 ? m : ":"))
    .replace(":", "T")
    .replace(":", ":") + ":00";

  const date = new Date(
    dateStr.replace(/-/g, (m, i) => (i < 10 ? m : ":"))
      .replace(":", "T")
      .replace(":", ":") + ":00"
  );

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "오후" : "오전";

  hours = hours % 12;
  hours = hours ? hours : 12; // 0시는 12로 표시

  const minuteStr = minutes.toString().padStart(2, "0");

  return `${ampm} ${hours}:${minuteStr}`;
}



interface CDetailProps {
  searchParams: { plan_id: number };
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
        <section className="px-4"><span className="text-body-lg">{data.plan.start_date} ~ {data.plan.end_date}</span></section>
        <SectionContainer className="flex-col">
          <div className="flex flex-col">
            {data.plan.plan.map((plans, index1) => (
              <ToggleSpan key={index1} day={index1+1}>
                <section className="flex flex-col gap-5">
                {plans.map((item, index2)=> {
                  const globalIndex = data.plan.plan
                      .slice(0, index1)
                      .reduce((acc, cur) => acc + cur.length, 0)
                    + index2 + 1;
                  return (
                    <div key={index2} className="flex gap-3">
                      <span className="w-18">{formatTo12Hour(item.time)}</span>
                      <div className="w-6 h-6 rounded-full bg-primary text-white flex justify-center items-center">
                        {globalIndex}
                      </div>
                      <div className="border-1 flex-1 border-outline flex flex-col px-6 py-4 rounded-2xl">
                        <span className="text-body-md">{item.todo}</span>
                        <span className="text-caption text-secondary">{item.place}</span>
                      </div>
                    </div>
                  )
                })}
                </section>
              </ToggleSpan>
            ))}
          </div>
        </SectionContainer>
        <CommentList comments={data.plan.comments} />
      </>}
    </MainContainer>
  )
}

export default Page;