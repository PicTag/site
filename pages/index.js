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
        <div className='flex flex-col justify-center items-center'>
          <p className=' text-4xl text-blue-500 font-bold'>Welcome to PicTag</p>
          <div className='flex flex-row w-full justify-around'>
            <div className='flex flex-col items-center'>
              <Image src='/samuel.jpg' alt='Samuel' width={300} height={300} />
              <p>Samuel</p>
              <p>samuel@pictag.us</p>
            </div>
            <div className='flex flex-col items-center'>
              <Image src='/sarv.png' alt='Sarvesh' width={300} height={300} />
              <p>Sarvesh</p>
              <p>sarvesh@pictag.us</p>
            </div>
            <div className='flex flex-col items-center'>
              <Image src='/tyla.jpeg' alt='Tyler' width={300} height={300} />
              <p>Tyler</p>
              <p>tyler@pictag.us</p>
            </div>
            
            
          </div>
        </div>
      </main>
    </div>
  );
}
