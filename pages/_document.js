/* eslint-disable linebreak-style */
import client from '../src/apollo/client';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GET_SITE } from '../src/queries/pages/get-site';

class MyDocument extends Document {
  static async getInitialProps( ctx ) {
    const initialProps = await Document.getInitialProps( ctx );
    const { data, errors } = await client.query( {
      query: GET_SITE,
    } );
    return { ...initialProps, data };
  }

  render() {
    return (
      <Html lang={this.props.data?.allSettings?.generalSettingsLanguage}>
        <Head>
           {/* Global Site Tag (gtag.js) - Google Analytics */}
           <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
