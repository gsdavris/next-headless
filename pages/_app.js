import '../src/styles/style.scss';
import { ApolloProvider } from '@apollo/client';
import client from '../src/apollo/client';

import Router from 'next/router';
import NProgress from 'nprogress';
import { motion } from 'framer-motion';

NProgress.configure( { showSpinner: false } );
Router.events.on( 'routeChangeStart', () => NProgress.start() );
Router.events.on( 'routeChangeComplete', () => NProgress.done() );
Router.events.on( 'routeChangeError', () => NProgress.done() );

function MyApp( { Component, pageProps, router } ) {
	return (
		<ApolloProvider client={client}>
			<motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
			pageInitial: {
				opacity: 0
			},
			pageAnimate: {
				opacity: 1
			},
			}}>
				<Component {...pageProps} />
			</motion.div>
		</ApolloProvider>
	);
}

export default MyApp;
