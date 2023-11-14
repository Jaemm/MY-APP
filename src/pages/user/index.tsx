// Home.tsx
import Head from 'next/head';
import MainLayout from '../../layouts/index';
import { Page } from './style';

const User = () => {
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

User.layout = MainLayout;

export default User;
