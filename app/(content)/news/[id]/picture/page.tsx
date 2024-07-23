import { notFound } from "next/navigation";
import { getNewsItem } from "@/db/access";

export default async function page({ params: { id } }) {
  const newsItem = await getNewsItem(id);

  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
