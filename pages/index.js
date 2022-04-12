import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='flex flex-col justify-center'>
      <Head>
        <title>PicTag</title>
        <meta name='description' content='Website for PicTag' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center w-screen h-screen'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <p className=' text-4xl text-blue-500 font-bold pb-10'>Welcome to PicTag</p>
          <div className='flex flex-row w-full justify-around px-20'>
            <div className='flex flex-col items-center'>
              <Image src='/samuel1.png' alt='Samuel Yuan' width={300} height={300} />
              <p>Samuel Yuan</p>
              <a href='mailto:samuel@pictag.us' target='_blank' rel='noreferrer' className='text-blue-500'>samuel@pictag.us</a>
            </div>
            <div className='flex flex-col items-center'>
              <Image src='/sarv.png' alt='Sarvesh' width={300} height={300} />
              <p>Sarvesh Submarineian</p>
              <a href='mailto:sarvesh@pictag.us' target='_blank' rel='noreferrer' className='text-blue-500'>sarvesh@pictag.us</a>
            </div>
            <div className='flex flex-col items-center'>
              <Image src='/tyla1.png' alt='Tyler' width={300} height={300} />
              <p>Tyler  Kerch</p>
              <a href='mailto:tyler@pictag.us' target='_blank' rel='noreferrer' className='text-blue-500'>tyler@pictag.us</a>
            </div>
            
            
          </div>
        </div>
      </main>
    </div>
  );
}
