import Head from 'next/head';

import { Layout, Loading } from '../components';
import { useAuth, useLoader } from '../hooks';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  const { authorized } = useAuth();
  const { loading } = useLoader();

  if ( loading ) {
    return <Loading />;
  }

  return (
    <Layout>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      {authorized &&
        <Component {...pageProps} />
      }
    </Layout>
  )
};

export default MyApp;
