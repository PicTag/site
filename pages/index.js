import Head from 'next/head';
import Landing from '../components/landing';
import Problem from '../components/problem';
import Solution from '../components/solution';
import Team from '../components/team';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='flex flex-col justify-center'>
      <Head>
        <title>PicTag</title>
        <meta name='description' content='PicTag - Sort. Search. Share.' />
        <link rel='icon' href='/favicon.ico' />
        <meta property="og:image" content="preview.png" />
      </Head>

      <main className='flex flex-col items-center justify-center w-screen'>
        <Landing />
        <Problem />
        <Solution />
        <Team />
      </main>
    </div>
  );
}
