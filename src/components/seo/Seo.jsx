/* eslint-disable linebreak-style */
import {NextSeo} from 'next-seo';
import PropTypes from 'prop-types';

const Seo = ( {seo, uri} ) => {
	const {
		title,
		metaDesc,
		metaRobotsNoindex,
		metaRobotsNofollow,
		opengraphDescription,
		opengraphTitle,
		opengraphImage,
		opengraphSiteName
	} = seo;

	const currentLocation = process.browser ? window.location.origin : null;
	const opengraphUrl = ( process.env.NEXT_PUBLIC_NEXT_URL ? process.env.NEXT_PUBLIC_NEXT_URL : currentLocation ) + uri;

	return (
		<NextSeo
			title={title}
			description={opengraphDescription || metaDesc}
			canonical={opengraphUrl}
			noindex={metaRobotsNoindex}
			nofollow={metaRobotsNofollow}
			openGraph={{
				type: 'website',
				locale: 'el',
				url: opengraphUrl,
				title: opengraphTitle,
				description: opengraphDescription,
				images: [
					{
						url: opengraphImage?.sourceUrl,
						width: 1280,
						height: 720
					}
				],
				site_name: opengraphSiteName
			}}
			twitter={{
				handle: '@Codeytek',
				site: '@Codeytek',
				cardType: 'summary_large_image'
			}}
		/>
	);
};

Seo.propTypes = {
	seo: PropTypes.object
};

Seo.defaultProps = {
	seo: {
		canonical: '',
		title: '',
		metaDesc: '',
		metaRobotsNoindex: '',
		metaRobotsNofollow: '',
		opengraphDescription: '',
		opengraphTitle: '',
		opengraphImage: {
			sourceUrl: ''
		},
		opengraphUrl: '',
		opengraphSiteName: ''
	}
};

export default Seo;
