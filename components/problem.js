import Image from 'next/image';

export default function Problem() {
  return (
    <div
      className='relative flex flex-col justify-start items-start min-h-screen w-full px-8 md:px-12 lg:w-11/12 xl:w-10/12 2xl:w-9/12 font-inter'
      id='problem'
    >
      <h2 className='text-7xl text-black font-bold pt-14'>The Problem</h2>
      <h3 className='text-6xl text-gray-500 pt-10 font-light'>
        People dont have
        <span className='italic'> control</span>
      </h3>

      <p className='text-3xl text-gray-500 font-light pt-10 w-6/12'>
        In a world dominated by digital data, it&apos;s still too hard to sort,
        search, and share images on your phone.
      </p>
      <div className='flex flex-row justify-end items-end w-full'>
        <img
          className='md:absolute md:bottom-0 md:right-0 pt-8 md:pt-0 md:block'
          src='/problem-ss.png'
          width={400}
          height={400}
          alt='iPhone Problem Mockup'
        ></img>
      </div>
    </div>
  );
}
