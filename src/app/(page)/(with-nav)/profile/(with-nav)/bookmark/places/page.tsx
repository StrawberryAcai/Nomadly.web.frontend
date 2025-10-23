import MainContainer from "@/shared/components/containers/MainContainer";
import { getMeBookmarkedPlan } from "@/features/profile/api/queries";
import BookmarkCard from "@/features/profile/components/BookmarkCard";

export default async function Page() {
  const data = await getMeBookmarkedPlan();
  console.log(data);
  return (
    <MainContainer className="px-4 pb-4">
      {Array.isArray(data) ? data.map((bookmark, idx)=>(
        <BookmarkCard key={idx} {...bookmark} />
      )):<></>}
    </MainContainer>
  );
}
