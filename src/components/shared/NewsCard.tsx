import React from 'react'
import NewsImg from '@/assets/banner.jpg'
import Image from 'next/image'
import { Button } from '../ui/button'
import { NewsCardProp } from '@/types/news'
const NewsCard = ({item}:NewsCardProp) => {
  return (
    <div className='shadow-md p-5'>
        <Image
        className='rounded'
        src={item?.imageUrl}
        width={500}
        height={500}
        alt='News Img Thumbnail'
        />
        <h2 className='text-xl font-bold py-2'>What To Expect From United Natural Foods Inc (UNFI) Q4 2024 Earnings</h2>
        <p className='py-2'>United Natural Foods Inc (UNFI) will release its Q4 2024 earnings on October 1, 2024....</p>
        <Button>Read More</Button>
    </div>
  )
}

export default NewsCard