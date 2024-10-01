'use client';
import React from 'react';
import useShowAuthBtn from '@/hook/useShowAuthBtn';

const Page = () => {
  const userData = useShowAuthBtn();

  return (
    <div className="">
      <h1>
        Welcome back,{' '}
        <span className=" capitalize text-main font-semibold">
          {userData?.firstName + ' ' + userData?.lastName}{' '}
        </span>
      </h1>
    </div>
  );
};

export default Page;
