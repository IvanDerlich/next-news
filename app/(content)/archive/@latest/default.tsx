import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/helper-methods/news";

function LatestPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h1>Latest News Page</h1>
      <NewsList news={latestNews} />
    </>
  );
}

export default LatestPage;
