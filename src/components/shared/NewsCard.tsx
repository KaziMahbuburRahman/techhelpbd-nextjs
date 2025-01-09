import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { NewsCardProp } from "@/types/news";
import Link from "next/link";
const NewsCard = ({ item }: NewsCardProp) => {
  const title =
    item.title.length > 63 ? `${item.title.substring(0, 63)}...` : item.title;

  const description =
    item?.description.length > 143
      ? `${item?.description.substring(0, 143)}...`
      : item?.description;

  return (
    <div className="shadow-md p-5">
      <Image
        className="rounded"
        src={item?.imageUrl}
        width={500}
        height={500}
        alt="News Img Thumbnail"
        priority
      />
      <h2 className="text-xl font-bold py-2">{title}</h2>
      <p className="py-2">{description}</p>
      <Button>
        <Link href={`/news/${item._id}`}>Read More</Link>
      </Button>
    </div>
  );
};

export default NewsCard;
