import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import NewsLetter from "@/components/shared/NewsLetter";
import { NewsItem } from "@/types/news";

const Home = async () => {
  const news = await fetch(
    "https://news-api-next-js-lilac.vercel.app/api/news"
  ).then((res) => res.json());
  console.log(news);

  return (
    <div>
      <Banner />
      <div>
        <h2 className="text-3xl font-bold">Latest News</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 py-5 gap-5">
          {news.map((item: NewsItem) => (
            <NewsCard key={item?._id} item={item} />
          ))}
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default Home;
