import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";
import DisplayImage from "@/components/DisplayImage";
export default function page({ params: { slug } }) {
  console.log("slug: ", slug);
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.id === slug);

  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen">
      <DisplayImage
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
        ratio={7 / 10}
      />
    </div>
  );
}
