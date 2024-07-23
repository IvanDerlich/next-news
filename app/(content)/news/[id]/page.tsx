import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getNewsItem } from "@/db/access";

async function NewsArticlePage({ params: { id } }) {
  const newsItem = await getNewsItem(id);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${id}/picture`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}

export default NewsArticlePage;
