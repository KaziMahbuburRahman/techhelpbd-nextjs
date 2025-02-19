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
    <div className="shadow-md p-5 dark:bg-[#1F2937] flex flex-col min-h-[450px]">
      {/* Image with fixed height */}
      <div className="w-full h-[200px]">
        <Image
          className="rounded object-cover w-full h-full"
          src={item?.imageUrl}
          width={500}
          height={200}
          alt="News Img Thumbnail"
          priority
        />
      </div>

      {/* Content Area */}
      <div className="flex-grow">
        <h2 className="text-xl font-bold py-2">{title}</h2>
        <p className="py-2">{description}</p>
      </div>

      {/* Read More Button always at the bottom */}
      <div className="mt-auto">
        <Button>
          <Link href={`/news/${item._id}`}>Read More</Link>
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;
