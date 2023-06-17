import Head from 'next/head'
import Link from 'next/link'

import { styled } from '@linaria/react'

import { Heading } from '@/components/Heading'
import { Color, FontFamily, FontWeight } from '@/styles/StyleToken'

export default function Home() {
  return (
    <>
      <Head>
        <title>辻村研究室｜名古屋市立大学芸術工学部</title>
      </Head>

      <_TopVisual>
        <_Container>
          <_SiteTitle>
            Nagoya City University
            <br />
            Tsujimura Lab
          </_SiteTitle>
        </_Container>
      </_TopVisual>

      <_Block>
        <_ArticleContainer>
          <Heading>News</Heading>
          <_NewsList>
            <_NewsItem>
              <Link href='/'>
                <span>2022/05/15</span>
                <p>
                  ホームページをリニューアルしました。進学や研究室配属などに役立ててください。
                </p>
              </Link>
            </_NewsItem>
            <_NewsItem>
              <Link href='/'>
                <span>2021/02/16</span>
                <p>
                  本研究室学部4年生の伊藤登萌さんと中山智恵さんが2020年度色彩検定において1級に合格しました。
                </p>
              </Link>
            </_NewsItem>
            <_NewsItem>
              <Link href='/'>
                <span>2017/09/06-09</span>
                <p>辻村教授が国際瞳孔学会でLoewenfeld記念講演を行いました。</p>
              </Link>
            </_NewsItem>
          </_NewsList>
        </_ArticleContainer>
      </_Block>
    </>
  )
}

const _TopVisual = styled.section`
  display: flex;
  align-items: center;
  width: 100vw;
  height: calc(100svh - 64px);
  background-color: ${Color.main_blue};
`

const _Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;
`

const _SiteTitle = styled.h1`
  color: ${Color.main_white};
  font-weight: ${FontWeight.bold};
  font-family: ${FontFamily.nunito_sans};
  font-size: 3.2rem;
  line-height: 4.2rem;
  letter-spacing: 0.05em;
`

const _Block = styled.article`
  margin: 80px 0;
`

const _ArticleContainer = styled.div`
  width: 100%;
  max-width: 840px;
  margin: 0 auto;
`

const _NewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`

const _NewsItem = styled.li`
  line-height: 1.75rem;

  a {
    display: inline-flex;
  }

  span {
    display: inline-block;
    min-width: 120px;
  }
`
