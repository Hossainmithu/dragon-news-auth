import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/LayoutComponents/LeftNavbar';
import RightNav from '../components/LayoutComponents/RightNav';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div className='font-poppins'>
      <header>
        <Header></Header>
        <section className='w-11/12 mx-auto'>
          <LatestNews></LatestNews>
        </section>
        <section className='w-11/12 mx-auto py-4'>
          <Navbar></Navbar>
        </section>
      </header>
      <main className='w-11/12 mx-auto grid grid-cols-12 gap-4'>
        <aside className='col-span-3'>
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className='col-span-6'>
          <Outlet></Outlet>
        </section>
        <aside className='col-span-3'>
          <RightNav></RightNav>
        </aside>
      </main>
      <footer>

      </footer>
    </div>
  );
};

export default HomeLayout;