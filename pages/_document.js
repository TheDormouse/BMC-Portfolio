import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  

  render() {

    return (
      <Html lang='en'>
        <Head >
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-169904775-1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              console.log('Set tag');
              gtag('config', 'UA-169904775-1');
              `,
          }}
        />
          </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument