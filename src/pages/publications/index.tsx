import Head from 'next/head'

import { styled } from '@linaria/react'

import { Heading } from '@/components/typography/Heading'
import { SubHeading } from '@/components/typography/SubHeading'
import { Title } from '@/components/typography/Title'
import { FontWeight } from '@/styles/StyleToken'

export default function Publications() {
  return (
    <>
      <Head>
        <title>Publications｜辻村研究室｜名古屋市立大学芸術工学部</title>
      </Head>

      <article>
        <_ArticleInner>
          <Title>Publications</Title>
          <section>
            <Heading>Selected Articles</Heading>
            <SubHeading>主な研究業績</SubHeading>
            <_PublicationItem>
              <_PublicationLink href='/' target='_blank' rel='noopener'>
                Melanopsin-Based Brightness Discrimination in Mice and
                Humans(2012)
              </_PublicationLink>
              <span>マウスとヒトにおけるメラノプシンに基づく輝度識別</span>
            </_PublicationItem>
            <_PublicationItem>
              <_PublicationLink href='/' target='_blank' rel='noopener'>
                Melanopsin-Based Brightness Discrimination in Mice and
                Humans(2012)
              </_PublicationLink>
              <span>マウスとヒトにおけるメラノプシンに基づく輝度識別</span>
            </_PublicationItem>
          </section>
          <section>
            <Heading>Collaborations</Heading>
            <SubHeading>共同研究</SubHeading>
            <_List>
              <_ListItem>
                Melanopsin expressing retinal ganglion cells
                <_SubList>
                  <_SubListItem>
                    Katsunori Okajima,School of Engineering,Yokohama National
                    University,Japan
                  </_SubListItem>
                </_SubList>
              </_ListItem>
            </_List>
          </section>
          <section>
            <Heading>Media Coverage</Heading>
            <SubHeading>メディア掲載情報</SubHeading>
            <_NewsList>
              <_NewsItem>
                <span>2012/06/07, 14</span>
                <p>
                  週刊新潮「サイエンス宅配便：目の中にある第３の受容体」（サイエンスライター竹内薫さん）で研究が紹介
                </p>
              </_NewsItem>
              <_NewsItem>
                <span>2012/06/07, 14</span>
                <p>
                  週刊新潮「サイエンス宅配便：目の中にある第３の受容体」（サイエンスライター竹内薫さん）で研究が紹介
                </p>
              </_NewsItem>
            </_NewsList>
          </section>
        </_ArticleInner>
      </article>
    </>
  )
}

const _ArticleInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 840px;
  margin: 0 auto;
  padding: 6rem 0;
`

const _PublicationItem = styled.div`
  margin: 16px 0;

  span {
    display: inline-block;
    color: rgba(33, 33, 33, 0.6);
    font-size: 1rem;
    line-height: 1.25rem;
  }
`

const _PublicationLink = styled.a`
  font-weight: ${FontWeight.bold};
  font-size: 1rem;
  line-height: 1.75rem;
  letter-spacing: 0.03em;
  text-decoration-line: underline;
`

const _List = styled.ul`
  margin: 20px 0;
`

const _ListItem = styled.li`
  position: relative;
  padding-inline-start: 20px;
  font-size: 1rem;
  line-height: 1.75rem;

  &:before {
    content: '・';
    position: absolute;
    top: 0;
    left: 0;
  }
`

const _SubList = styled.ul``

const _SubListItem = styled.li`
  position: relative;
  padding-inline-start: 20px;
  font-size: 1rem;
  line-height: 1.75rem;

  &:before {
    content: '・';
    position: absolute;
    top: 0;
    left: 0;
  }
`

const _NewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`

const _NewsItem = styled.li`
  display: inline-flex;
  line-height: 1.75rem;

  span {
    display: inline-block;
    min-width: 120px;
  }
`
