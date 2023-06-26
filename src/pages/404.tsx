import Head from 'next/head'

import { css } from '@linaria/core'

import { SubHeading } from '@/components/typography/SubHeading'
import { textStyle } from '@/components/typography/Text'
import Icon404 from 'public/undraw_page_not_found_re_e9o6.svg'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Not Found｜辻村研究室｜名古屋市立大学芸術工学部</title>
      </Head>

      <article className={article}>
        <div className={iconWrap}>
          <Icon404 />
        </div>
        <SubHeading>
          ご指定のページが
          <br className={spOnlyBr} />
          見つかりませんでした
        </SubHeading>
        <p className={message}>
          アクセスしようとしたページは削除、変更されたか、現在利用できない可能性があります。
        </p>
      </article>
    </>
  )
}

const article = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 92%;
  max-width: 840px;
  margin: 0 auto;
  padding: calc(6rem + 64px) 0 6rem;

  h3,
  p {
    text-align: center;
  }
`

const iconWrap = css`
  position: relative;
  width: 80%;
  max-width: 400px;
  margin-bottom: 40px;
  aspect-ratio: 860.13137 / 571.14799;

  svg {
    position: absolute;
  }
`

const spOnlyBr = css`
  display: none;

  @media screen and (max-width: 424px) {
    display: block;
  }
`

const message = css`
  ${textStyle};
`
