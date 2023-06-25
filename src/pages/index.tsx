import Head from 'next/head'
import Link from 'next/link'

import { css } from '@linaria/core'

import { Heading } from '@/components/typography/Heading'
import { Color, FontFamily, FontWeight } from '@/styles/StyleToken'

export default function Home() {
  return (
    <>
      <Head>
        <title>辻村研究室｜名古屋市立大学芸術工学部</title>
      </Head>

      <section className={topVisual}>
        <div className={container}>
          <h1 className={siteTitle}>
            <span>Nagoya City University</span>
            <br />
            Tsujimura Lab.
          </h1>
        </div>
      </section>

      <article className={article}>
        <section className={newsBlock}>
          <Heading>News</Heading>
          <ul className={newsList}>
            <li className={newsItem}>
              <a
                href='https://www.nagoya-cu.ac.jp/media/20230621press.pdf'
                target='_blank'
                rel='noopener'
              >
                <span>2023/06/22</span>
                <p>
                  特殊な照明光を用いることによってヒトのコントラスト（文字や画像の濃淡）感度を改善することを発見
                </p>
              </a>
            </li>
            <li className={newsItem}>
              <Link href='/'>
                <span>2023/06/22</span>
                <p>
                  ホームページをリニューアルしました。進学や研究室配属などに役立ててください。
                </p>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  )
}

const topVisual = css`
  display: flex;
  align-items: center;
  width: 100vw;
  height: calc(100svh - 40px);
  background-color: ${Color.main_blue};
`

const container = css`
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;

  @media screen and (max-width: 830px) {
    padding: 0 20px;
  }
`

const siteTitle = css`
  color: ${Color.main_white};
  font-weight: ${FontWeight.bold};
  font-family: ${FontFamily.nunito_sans};
  font-size: 4.2rem;
  line-height: 4.2rem;
  letter-spacing: 0.05em;

  @media screen and (max-width: 830px) {
    font-size: 2.2rem;
    line-height: 2.2rem;
  }

  span {
    font-size: 2.2rem;
    letter-spacing: 0.03em;

    @media screen and (max-width: 830px) {
      font-size: 1.2rem;
    }
  }
`

const article = css`
  margin: 80px 0;
`

const newsBlock = css`
  width: 88%;
  max-width: 840px;
  margin: 0 auto;
`

const newsList = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`

const newsItem = css`
  line-height: 1.75rem;

  a {
    display: inline-flex;
  }

  span {
    display: inline-block;
    min-width: 120px;
  }
`
