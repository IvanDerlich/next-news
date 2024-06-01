import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/NewsList";
import DisplayImage from "@/components/DisplayImage";

function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}

export default NewsPage;
