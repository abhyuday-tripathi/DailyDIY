import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>DailyDIY - Find Solutions to your Problems</title>
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='description'
          content='DailyDIY is a online place where you can find solutions to your problems'
        />
        <meta
          name='keywords'
          content='Daily, DIY, DailyDIY, Problems, Blog, Solutions'
        />
      </Head>
      <h2>Welcome to DailyDIY</h2>
      <div>
        <p>
          Want tips and tricks? You are at the right place! DailyDIY is a online
          Blog Website where you can solve your problems by just reading!
        </p>
      </div>
    </div>
  );
}
