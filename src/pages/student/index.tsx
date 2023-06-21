import Head from 'next/head'

import { css } from '@linaria/core'

import { ArticleContainer } from '@/components/template/ArticleContainer'
import { Title } from '@/components/typography/Title'

export default function ForStudent() {
  return (
    <>
      <Head>
        <title>For Student｜辻村研究室｜名古屋市立大学芸術工学部</title>
      </Head>

      <ArticleContainer>
        <Title>For Student</Title>
        <section></section>
      </ArticleContainer>
    </>
  )
}

const xxx = css``
