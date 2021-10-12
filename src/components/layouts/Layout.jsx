/* eslint-disable linebreak-style */
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import {useRouter} from 'next/router';
import Seo from '../seo/Seo';
import Image from '../Image';
import AnimationTitle from '../animations/AnimationTitle';
import GoogleMap from '../maps/GoogleMap';
import ContactForm from '../contact/ContactForm';
import {isEmpty} from 'lodash';
import {sanitize} from '../../utils/miscellaneous';
import PropTypes from 'prop-types';

const Layout = ( {children, isPost, data} ) => {
    const {page, post, posts, header, footer, headerMenus, footerMenus} = data || {};
	const router = useRouter();
	// If it does not have either post or page.
	if ( isEmpty( page ) && isEmpty( post ) && isEmpty( posts ) ) {
		return null;
	}

	const seo = isPost ? ( post?.seo ?? {} ) : ( page?.seo ?? {} );
	const uri = isPost ? ( post?.uri ?? {} ) : ( page?.uri ?? {} );

    return (
		<>
        <div>
            <Seo seo={seo} uri={uri} />
			<Head>
				<link rel="shortcut icon" href={header?.favicon} />
				{seo?.schemaDetails ? (
					<script
						type='application/ld+json'
						className='yoast-schema-graph'
						key='yoastSchema'
						dangerouslySetInnerHTML={{__html: sanitize( seo.schemaDetails )}}
					/>
				) : null}
			</Head>
			<Header header={header} menu={headerMenus?.edges}/>
			<main className="w-full flex-col mx-auto min-h-almost-screen">
				<div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
					<div className="absolute top-0 w-full h-full">
						<Image
						{ ... isPost ? post?.featuredImage?.node : page?.featuredImage?.node }
						width="400"
						height="225"
						layout="fill"
						containerClassNames="absolute top-0 w-full h-full bg-center bg-cover"
						title={seo?.title ?? ''}
						/>
						<span
						id="blackOverlay"
						className="w-full h-full absolute top-0 opacity-30 bg-black"
						></span>
					</div>
					<div className="container relative mx-auto">
						<div className="items-center flex flex-wrap">
							<div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
								<AnimationTitle className="pr-6">
									<h1 className="text-white font-light text-5xl">
										{seo?.title}
									</h1>
									<p className="mt-4 text-lg font-light text-gray-200">
										{seo?.metaDesc}
									</p>
								</AnimationTitle>
							</div>
						</div>
					</div>
				</div>
				{ router && '/contact/' === router.asPath ?
					<GoogleMap />	: '' }
				{children}
				{ router &&
				( '/' === router.asPath || '/contact/' === router.asPath ) &&
				<ContactForm />
				}
			</main>
			<Footer footer={footer} menu={footerMenus?.edges} />
        </div>
		</>
    );
};


Layout.propTypes = {
	data: PropTypes.object,
	isPost: PropTypes.bool,
	children: PropTypes.object || PropTypes.array
};

Layout.defaultProps = {
	data: {},
	isPost: false,
	children: {}
};


export default Layout;
