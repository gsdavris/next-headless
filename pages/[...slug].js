import client from '../src/apollo/client';
import {GET_PAGES_URI} from '../src/queries/pages/get-pages';
import {isEmpty} from 'lodash';
import {GET_PAGE} from '../src/queries/pages/get-page';
import {useRouter} from 'next/router';
import Layout from '../src/components/layouts/Layout';
import {FALLBACK, handleRedirectsAndReturnData, isCustomPageUri} from '../src/utils/slug';
import {sanitize} from '../src/utils/miscellaneous';


const Page = ( {data} ) => {
    const router = useRouter();

	// If the page is not yet generated, this will be displayed
	// initially until getStaticProps() finishes running
	if ( router.isFallback ) {
		return <div>Loading...</div>;
	}

	return (
		<Layout  data={data}>
			<section className='relative py-40'>
				<div className="lg:container mx-auto  px-4">
				{ data?.page?.content ? <div dangerouslySetInnerHTML={{__html: sanitize( data?.page?.content ?? {} )}}/> : null }
				</div>
			</section>
		</Layout>
	);
};

export default Page;

export async function getStaticProps( {params} ) {
	const {data, errors} = await client.query( {
		query: GET_PAGE,
		variables: {
			uri: params?.slug.join( '/' ),
		},
	} );

	const defaultProps = {
		props: {
			data: data || {}
		},
		revalidate: 1,
	};

	return handleRedirectsAndReturnData( defaultProps, data, errors, 'page' );

}

export async function getStaticPaths() {
	const {data} = await client.query( {
		query: GET_PAGES_URI
	} );

	const pathsData = [];

	data?.pages?.nodes && data?.pages?.nodes.map( page => {
		if ( ! isEmpty( page?.uri ) && ! isCustomPageUri( page?.uri ) ) {
			const slugs = page?.uri?.split( '/' ).filter( pageSlug => pageSlug );
			pathsData.push( {params: {slug: slugs}} );
		}
	} );

	return {
		paths: pathsData,
		fallback: FALLBACK
	};
}
