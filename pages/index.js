import Head from 'next/head';
import Landing from '../components/landing';
import Team from '../components/team';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='flex flex-col justify-center'>
      <Head>
        <title>PicTag</title>
        <meta name='description' content='Website for PicTag' />
        <link rel='icon' href='/favicon.ico' />
        <meta property="og:image" content="sarv.png" />
      </Head>

      <main className='flex flex-col items-center justify-center w-screen'>
        <Landing />
        <Team />
      </main>
    </div>
  );
}
