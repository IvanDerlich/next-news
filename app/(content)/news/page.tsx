"use client";
import NewsList from "@/components/NewsList";

async function NewsPage() {
  const response = await fetch("http://localhost:8080/news");
  const news = await response.json();

  return (
    <>
      <h1>News Page</h1>
      {news ? <NewsList news={news} /> : <p>No news found.</p>}
    </>
  );
}

export default NewsPage;
