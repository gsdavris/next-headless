import client from '../src/apollo/client';
import Layout from '../src/components/layouts/Layout';
import HomeSection from '../src/components/layouts/HomeSection';
import ContactForm from '../src/components/contact/ContactForm';
import {sanitize} from '../src/utils/miscellaneous';
import {GET_PAGE} from '../src/queries/pages/get-page';
import { handleRedirectsAndReturnData } from '../src/utils/slug';

export default function Index( {data} ) {
  return (
    <Layout data={data}>
      <>
        <HomeSection />
         { data?.page?.content ? <div dangerouslySetInnerHTML={{__html: sanitize( data?.page?.content ?? {} )}}/> : null }
      </>
    </Layout>
  );
}

export async function getStaticProps( context ) {
  const  { data, errors } = await client.query( {
    query: GET_PAGE,
		variables: {
			uri: '/',
		},
  } );

  const defaultProps = {
    props: {
      data: data || {}
    },
    revalidate: 1
  };

  return  handleRedirectsAndReturnData( defaultProps, data, errors, 'page' );
}
