"use client";
import { fetchNews } from "@/lib/fetchNews";
import { NewsItem } from "@/types/news";
import React, { useEffect, useState } from "react";
import NewsCard from "../shared/NewsCard";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";


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
      <h2 className="text-xl font-bold py-8">Latest News</h2>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-3/4">
          <h2 className="text-lg font-bold">Search News</h2>
          <Input
            placeholder="Search here..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-lg font-bold">Filter by Category:</h2>

          <Select>
            <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {
                  news.map((news)=><SelectItem className="capitalize" key={news._id} value={news.categories}>{news.categories}</SelectItem>)
                }

              </SelectGroup>
            </SelectContent>
          </Select>
          

        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 py-2">
        {news.map((news) => (
          <NewsCard key={news._id} item={news} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
