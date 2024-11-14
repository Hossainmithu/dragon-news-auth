import React from 'react';
import { CiShare2 } from 'react-icons/ci';
import { FaRegBookmark } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';

const NewsCard = ({ news }) => {

  console.log(news)
  const { image_url, title, details, total_view, rating, author } = news;

  // {
  //   "_id": "0282e0e58a5c404fbd15261f11c2ab6a",
  //   "others_info": {
  //     "is_todays_pick": false,
  //     "is_trending": true
  //   },
  //   "category_id": "01",
  //   "rating": {
  //     "number": 4.5,
  //     "badge": "Excellent"
  //   },
  //   "total_view": 488,
  //   "title": "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet",
  //   "author": {
  //     "name": "Jimmy Dane",
  //     "published_date": "2022-08-24 17:27:34",
  //     "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
  //   },
  //   "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
  //   "image_url": "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",
  //   "details": "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2."
  // }

  return (
    <div className='border-2 rounded'>
      <div className='flex justify-between items-center bg-base-300 px-4 py-2'>
        <div className='flex items-center gap-4'>
          <img className='w-10 h-10 rounded-full' src={author.img} alt="" />
          <div>
            <h3 className='text-lg font-semibold'>{author.name}</h3>
            <p className='text-[#706F6F]'>{author.published_date}</p>
          </div>
        </div>
        <div className='flex gap-3'>
          <FaRegBookmark />
          <CiShare2 />
        </div>
      </div>
      <div className='p-4'>
        <h2 className='text-2xl font-bold mb-3'>{news.title}</h2>
        <img className='w-full' src={image_url} alt="" />
        <p className='text-[#706F6F] mt-4'>{details}</p>
        <button className='text-lg text-orange-500 mb-3'>Read More</button>
        <hr />
        <div className='flex justify-between items-center mt-3'>
          <p>{rating.number}</p>
          <p className='flex items-center gap-2'><IoEyeOutline /> {total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;