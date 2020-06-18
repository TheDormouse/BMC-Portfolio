import Document, { Html, Head, Main, NextScript } from 'next/document'
import ReactGA from 'react-ga';
import { Analytics } from '../lib/analytics'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    Analytics.logPageView(ctx.asPath)
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