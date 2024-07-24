import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/prisma/access";

async function LatestPage() {
  const latestNews = await getLatestNews();
  return (
    <>
      <h1>Latest News Page</h1>
      <NewsList news={latestNews} />
    </>
  );
}

export default LatestPage;
