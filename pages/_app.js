import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Layout, Loading } from '../components';
import { useAuth, useLoader } from '../hooks';
import '../styles/globals.scss';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }) => {
  const { authorized } = useAuth();
  const { isLoading } = useLoader();

  if ( isLoading ) {
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
      <QueryClientProvider client={queryClient}>
        {authorized &&
          <Component {...pageProps} />
        }
      </QueryClientProvider>
    </Layout>
  )
};

export default MyApp;
