"use client";
import { fetchNews } from "@/lib/fetchNews";
import { NewsItem } from "@/types/news";
import React, { useEffect, useState } from "react";
import NewsCard from "../shared/NewsCard";

const NewsList = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getnews = async () => {
      setNews(await fetchNews(category, search));
    };
    getnews();
  }, [search, category]);
  //   console.log(news);
  return (
    <div>
      <h2 className="text-3xl font-bold">News List</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 py-2">
        {news.map((news) => (
          <NewsCard key={news._id} item={news} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
