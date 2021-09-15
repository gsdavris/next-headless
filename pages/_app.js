import { useEffect } from 'react';
import '../src/styles/style.scss';
import { ApolloProvider } from '@apollo/client';
import client from '../src/apollo/client';
import * as ga from '../src/utils/ga';

import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { motion } from 'framer-motion';

NProgress.configure( { showSpinner: false } );
Router.events.on( 'routeChangeStart', () => NProgress.start() );
Router.events.on( 'routeChangeComplete', () => NProgress.done() );
Router.events.on( 'routeChangeError', () => NProgress.done() );

function MyApp( { Component, pageProps, router } ) {
	const myRouter = useRouter();

	useEffect( () => {
		const handleRouteChange = ( url ) => {
			ga.pageview( url );
		};
		//When the component is mounted, subscribe to router changes
		//and log those page views
		myRouter.events.on( 'routeChangeComplete', handleRouteChange );

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method
		return () => {
			myRouter.events.off( 'routeChangeComplete', handleRouteChange );
		};
	}, [ myRouter.events ] );

	return (
		<ApolloProvider client={client}>
			<motion.div key={router.asPath} initial="pageInitial" animate="pageAnimate" variants={{
			pageInitial: {
				opacity: 0
			},
			pageAnimate: {
				opacity: 1
			},
			}}>
				<Component {...pageProps} key={router.asPath} />
			</motion.div>
		</ApolloProvider>
	);
}

export default MyApp;
