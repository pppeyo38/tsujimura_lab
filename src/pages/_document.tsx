import type { DocumentContext, DocumentInitialProps } from 'next/document'
import Document, { Head, Html, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='ja'>
        <Head>
          <meta charSet='utf-8' />
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='辻村研究室｜名古屋市立大学芸術工学部'
          />
          <meta
            property='og:description'
            content='辻村研究室のホームページへようこそ。我々は生命を一つの汎用的情報処理システムとみなし、視覚情報の一つである色や形、明るさ情報について学び、特に第3の光受容体である網膜メラノプシン神経節細胞(ipRGC)に着目して研究を進めています。'
          />
          <link
            rel='icon'
            href='https://www.sda.nagoya-cu.ac.jp/tsujimura/favicon.ico'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin=''
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700;900&family=Zen+Kaku+Gothic+New:wght@400;700&display=swap'
            rel='stylesheet'
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
