import Image from 'next/image';

export default function Solution() {
  return (
    <div className='bg-slate-100 w-full flex flex-col justify-start items-center text-right'>
      <div
        className='relative min-h-screen w-full px-8 md:px-12 lg:w-11/12 xl:w-10/12 2xl:w-9/12 font-inter'
        id='problem'
      >
        <h2 className='text-7xl text-black font-bold pt-14 pb-4'>
          Introducing PicTag
        </h2>

        <div className='flex flex-col md:flex-row justify-between w-full'>
          <img
            className='ml-20 object-contain hidden md:block'
            src='/solution-ss.png'
            width={350}
            height={375}
            alt='iPhone Solution Mockup'
          ></img>
          <div className='flex flex-col items-end'>
            <h3 className='text-6xl text-gray-500 pt-6 font-light'>
              Sort. Search. Share.
            </h3>
            <p className='text-3xl text-gray-500 font-light pt-6 md:pt-10 lg:pt-20 max-w-lg'>
              Sort through automatically generated albums.
            </p>
            <p className='text-3xl text-gray-500 font-light pt-6 md:pt-10 lg:pt-20 max-w-lg'>
              Search with AI-backed image recognition.
            </p>
            <p className='text-3xl text-gray-500 font-light pt-6 md:pt-10 lg:pt-20 max-w-lg'>
              Share through in-app-messages and automatic tag transfer.
            </p>
          </div>
        </div>
        <img
          className='ml-20 object-contain pt-10 md:hidden'
          src='/solution-ss.png'
          width={350}
          height={375}
          alt='iPhone Solution Mockup'
        ></img>
      </div>
    </div>
  );
}
