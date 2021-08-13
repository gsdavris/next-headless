/* eslint-disable linebreak-style */
const path = require( 'path' );
const allowedImageWordPressDomain = new URL( process.env.NEXT_PUBLIC_WORDPESS_URL ).hostname;

module.exports = {
    future: {
        webpack5: false,
    },
	trailingSlash: true,
	webpackDevMiddleware: config => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300
		};
		return config;
	},
	sassOptions: {
		includePaths: [ path.join( __dirname, 'styles' ) ]
	},
	images: {
		domains: [ allowedImageWordPressDomain, 'via.placeholder.com' ],
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
					key: 'X-Content-Type-Options',
					value: 'nosniff',
					},
					{
					key: 'X-Frame-Options',
					value: 'DENY',
					},
					{
					key: 'X-XSS-Protection',
					value: '1; mode=block',
					},
				],
			},
		];
	},
	target: 'serverless'
};
