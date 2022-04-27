import Image from 'next/image';

export default function Team() {
  return (
    <div
      className='flex flex-col justify-start items-center h-[70vh] w-full px-8 md:px-12 lg:w-10/12 mb-14 lg:mb-20 pt-20'
      id='team'
    >
      <h2 className='text-5xl pb-10'>The Team</h2>
      <div className='flex flex-row w-screen justify-around px-20'>
      <div className='flex flex-col items-center'>
          <Image src='/tyler-hs.png' alt='Tyler' width={300} height={300} />
          <p>Tyler Kerch</p>
          <a
            href='mailto:tyler@pictag.us'
            target='_blank'
            rel='noreferrer'
            className='text-blue-500'
          >
            tyler@pictag.us
          </a>
        </div>
        <div className='flex flex-col items-center'>
          <Image src='/sarvesh-hs.png' alt='Sarvesh' width={300} height={300} />
          <p>Sarvesh Subramanian</p>
          <a
            href='mailto:sarvesh@pictag.us'
            target='_blank'
            rel='noreferrer'
            className='text-blue-500'
          >
            sarvesh@pictag.us
          </a>
        </div>
        <div className='flex flex-col items-center'>
          <Image
            src='/samuel-hs.png'
            alt='Samuel Yuan'
            width={300}
            height={300}
          />
          <p>Samuel Yuan</p>
          <a
            href='mailto:samuel@pictag.us'
            target='_blank'
            rel='noreferrer'
            className='text-blue-500'
          >
            samuel@pictag.us
          </a>
        </div>
        
        
      </div>
    </div>
  );
}
