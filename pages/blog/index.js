/* eslint-disable linebreak-style */
import client from '../../src/apollo/client';
import Layout from '../../src/components/layouts/Layout';
import { PER_PAGE_FIRST, totalPagesCount } from '../../src/utils/pagination';
import Pagination from '../../src/components/blog/Pagination';
import Posts from '../../src/components/blog/Posts';
import {handleRedirectsAndReturnData} from '../../src/utils/slug';
import {GET_POSTS} from '../../src/queries/posts/get-posts';

const Blog = ( { data } ) => {
	const pagesCount = totalPagesCount( data?.posts?.pageInfo?.offsetPagination?.total ?? 0 );
	return (
		<Layout data={data}>
			<section className='relative py-20'>
				<div className="lg:container mx-auto  px-4">
					<Posts posts={data?.posts?.edges ?? []}/>
					<Pagination pagesCount={pagesCount} postName="blog" />
				</div>
			</section>
		</Layout>
	);
};

export default Blog;

export async function getStaticProps() {
	const { data, errors } = await client.query( {
		query: GET_POSTS,
		variables: {
			uri: '/blog/',
			perPage: PER_PAGE_FIRST,
			offset: null,
		},
	} );

	const defaultProps = {
		props: {
			data: data || {}
		},
		revalidate: 1,
	};

	return handleRedirectsAndReturnData( defaultProps, data, errors, 'posts' );
}
