import Head from 'next/head';
import MainLayout from '../layouts';
import { Page } from './style';

const Home = () => {
  return (
    <>
      <Head>
        <title>HOME</title>
        <meta name="description" content="text." />
      </Head>
      <Page></Page>
    </>
  );
};

Home.layout = MainLayout;

export default Home;
