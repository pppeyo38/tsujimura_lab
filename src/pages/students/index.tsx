import Head from 'next/head'

import { css } from '@linaria/core'

import { ArticleContainer } from '@/components/template/ArticleContainer'
import { Text } from '@/components/typography/Text'
import { Title } from '@/components/typography/Title'

export default function ForStudents() {
  return (
    <>
      <Head>
        <title>For Students｜辻村研究室｜名古屋市立大学芸術工学部</title>
      </Head>

      <ArticleContainer>
        <Title>For Students</Title>
        <section className={section}>
          <Text>現在お知らせはありません。</Text>
        </section>
      </ArticleContainer>
    </>
  )
}

const section = css`
  height: calc(100svh - 12rem - 304px);
`
