import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {

  const { data: news } = useLoaderData();
  console.log(news)

  return (
    <div className='p-2'>
      <h1 className='font-semibold text-xl mb-3'>Dragon News Home</h1>
      <div className='space-y-5'>
        {
          news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;