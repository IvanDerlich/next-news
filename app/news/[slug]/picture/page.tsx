import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";
export default function page({ params: { slug } }) {
  console.log("slug: ", slug);
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.id === slug);

  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
