import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
      .then(res => res.json())
      .then(data => setCategories(data.data.news_category))
  }, [])

  return (
    <div className='p-2'>
      <h2 className='text-xl font-semibold'>All Category</h2>
      <div className='flex flex-col gap-2 mt-4 fixed'>
        {
          categories.map(category => <NavLink 
            to={`/category/${category.category_id}`}
            className='btn text-lg font-medium justify-start pl-8'
            key={category.category_id}>{category.category_name}</NavLink>)
        }
      </div>
    </div>
  );
};

export default LeftNavbar;