import Image from 'next/image';

export default function Solution() {
  return (
    <div className='bg-slate-100 w-full'>
      <div
        className='relative flex flex-col justify-start items-end min-h-screen w-full pl-8 md:pl-12 lg:w-11/12 font-inter text-right'
        id='problem'
      >
        <h2 className='text-7xl text-black font-bold pt-14 '>
          Introducing PicTag
        </h2>
        <h3 className='text-6xl text-gray-500 pt-10 font-light'>
          Sort. Search. Share.
        </h3>

        <p className='text-3xl text-gray-500 font-light pt-20 w-3/12'>
          Sort through automatically generated albums.
        </p>
      </div>
    </div>
  );
}
