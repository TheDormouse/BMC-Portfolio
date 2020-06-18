import Document, { Html, Head, Main, NextScript } from 'next/document'
import ReactGA from 'react-ga';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    ReactGA.initialize('UA-169904775-1');
    ReactGA.pageview(ctx.asPath);
    return { ...initialProps }
  }
  

  render() {

    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument