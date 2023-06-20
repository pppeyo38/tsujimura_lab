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
            Nagoya City University
            <br />
            Tsujimura Lab
          </h1>
        </div>
      </section>

      <article className={article}>
        <section className={newsBlock}>
          <Heading>News</Heading>
          <ul className={newsList}>
            <li className={newsItem}>
              <Link href='/'>
                <span>2022/05/15</span>
                <p>
                  ホームページをリニューアルしました。進学や研究室配属などに役立ててください。
                </p>
              </Link>
            </li>
            <li className={newsItem}>
              <Link href='/'>
                <span>2021/02/16</span>
                <p>
                  本研究室学部4年生の伊藤登萌さんと中山智恵さんが2020年度色彩検定において1級に合格しました。
                </p>
              </Link>
            </li>
            <li className={newsItem}>
              <Link href='/'>
                <span>2017/09/06-09</span>
                <p>辻村教授が国際瞳孔学会でLoewenfeld記念講演を行いました。</p>
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
  height: 100svh;
  background-color: ${Color.main_blue};
`

const container = css`
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;
`

const siteTitle = css`
  color: ${Color.main_white};
  font-weight: ${FontWeight.bold};
  font-family: ${FontFamily.nunito_sans};
  font-size: 3.2rem;
  line-height: 4.2rem;
  letter-spacing: 0.05em;
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
