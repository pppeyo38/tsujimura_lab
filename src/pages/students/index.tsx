import Head from 'next/head'

import { ArticleContainer } from '@/components/template/ArticleContainer'
import { MovieContainer } from '@/components/template/MovieContainer'
import { Heading } from '@/components/typography/Heading'
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
        <section>
          <Heading>研究室配属</Heading>
          <Text>
            辻村研究室の配属申請は【情報・産業ともに6/30(金)まで】です。
            産業の申請期間中のみとなります。
            情報の申請期間中には辻村研究室への申請はできませんのでご注意ください。
          </Text>
          <Text>
            名古屋市立大学芸術工学部情報・産業学科３年生へ向けた辻村研究室についての紹介動画になります。
            配属にあたっての参考になれば幸いです。
          </Text>
          <MovieContainer>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/H_h7I3eQtBg'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </MovieContainer>
        </section>
      </ArticleContainer>
    </>
  )
}
