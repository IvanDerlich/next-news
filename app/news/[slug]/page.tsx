import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import DisplayImage from "@/src/components/DisplayImage";
import { notFound } from "next/navigation";

function NewsArticlePage({ params: { slug } }) {
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.id === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="new-article">
      <header>
        <DisplayImage image={newsItem.image} title={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}

export default NewsArticlePage;