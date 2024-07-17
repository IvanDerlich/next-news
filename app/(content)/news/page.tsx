"use client";
import NewsList from "@/components/NewsList";
import { useEffect, useState } from "react";

function NewsPage() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch("http://localhost:8080/news");
      if (!response.ok) {
        setError("Failed to fetch news.");
      }
      const news = await response.json();
      console.log(news);
      setIsLoading(false);
      setNews(news);
    }
    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    // to do: Use default next page for errors
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>News Page</h1>
      {news ? <NewsList news={news} /> : <p>No news found.</p>}
    </>
  );
}

export default NewsPage;
