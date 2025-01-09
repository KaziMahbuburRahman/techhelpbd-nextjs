import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import bannerImg from "@/assets/banner.jpg";
const Banner = () => {
  return (
    <div className="grid md:grid-cols-2 place-items-center bg-[#f1f5f9] dark:bg-[#1F2937] my-5 p-8 gap-8">
      <div>
        <Image className="rounded" src={bannerImg} alt="banner" />
      </div>
      <div className="">
        <p className="text-gray-500">Technology</p>
        <h2 className="text-3xl font-bold py-2">
          OpenAI Is Growing Fast and Burning Through Piles of Money
        </h2>
        <p className="py-2">
          OpenAI monthly revenue hit US$300 million in August, up 1,700% since
          the beginning of 2023, and the company expects about $3.7 billion in
          annual sales this year, according to financial documents reviewed by
          The New York Times.
          <br />
          <br />
          OpenAI estimates that its revenue will balloon to copy1.6 billion next
          year. OpenAI revenue in August more than tripled from a year earlier,
          according to the documents, and about 350 million people — up from
          around 100 million in March of this year — used its services each
          month as of June.
        </p>
        <Button className="w-full mt-5">Read More</Button>
      </div>
    </div>
  );
};

export default Banner;
