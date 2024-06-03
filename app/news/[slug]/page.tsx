import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import DisplayImage from "@/components/DisplayImage";
import { notFound } from "next/navigation";
import Link from "next/link";

function NewsArticlePage({ params: { slug } }) {
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.id === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="new-article">
      <header>
        <Link href={`/news/${slug}/picture`}>
          <DisplayImage
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            ratio={6 / 10}
          />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}

export default NewsArticlePage;
