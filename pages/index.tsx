import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic'

const DynamicGlobe = dynamic(() => import('../components/planet'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

const Home: NextPage = () => {

  return (
    
    <div className={styles.container}>
      <Head>
        <title>superchain explorer</title>
        <meta content="superchain explorer" name="description" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />

        <h1 className={styles.title}>
        explore the superchain.
        </h1>

        <DynamicGlobe />

      </main>

    </div>
  );
};

export default Home;
