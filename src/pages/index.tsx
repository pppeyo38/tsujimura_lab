import Head from 'next/head'
import Link from 'next/link'

import { css } from '@linaria/core'

import { ExternalLink } from '@/components/typography/ExternalLink'
import { Heading } from '@/components/typography/Heading'
import { textStyle } from '@/components/typography/Text'
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
        <section className={sectionBlock}>
          <Heading>Outline</Heading>
          <p className={outline}>
            名古屋市立大学芸術工学研究科 辻村誠一研究室のホームページです。
          </p>
          <p className={outline}>
            当研究室では、光の色を調整して世界で初めてメラノプシン細胞のみを刺激できる装置を開発し、メラノプシン細胞のコントラスト感度への寄与について実験を行っています。
          </p>
          <Link href='/laboratory' className={viewMore}>
            view more
          </Link>
        </section>
        <section className={sectionBlock}>
          <Heading>News</Heading>
          <ul className={newsList}>
            <li className={newsItem}>
              <a
                href='https://www.nagoya-cu.ac.jp/media/20230621press.pdf'
                target='_blank'
                rel='noopener'
              >
                <span>2023/06/22</span>
                <ExternalLink link='https://www.nagoya-cu.ac.jp/media/20230621press.pdf'>
                  特殊な照明光を用いることによってヒトのコントラスト（文字や画像の濃淡）感度を改善することを発見
                  (PDF: 0.99MB)
                </ExternalLink>
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
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 92%;
  max-width: 840px;
  margin: 80px auto 0;
  padding: 0 0 6rem;
`

const sectionBlock = css`
  display: flex;
  flex-direction: column;

  h2 {
    width: 100%;
  }
`

const outline = css`
  ${textStyle};

  &:first-child {
    margin-bottom: 20px;
  }
`

const viewMore = css`
  align-self: flex-end;
  font-weight: ${FontWeight.regular};
  ${textStyle};
  text-decoration: underline;
  transition: 0.2s;

  &:hover {
    color: ${Color.main_grey};
  }
`

const newsList = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
