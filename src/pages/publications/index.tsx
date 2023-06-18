import Head from 'next/head'

import { styled } from '@linaria/react'

import { ArticleContainer } from '@/components/template/ArticleContainer'
import { ExternalLink } from '@/components/typography/ExternalLink'
import { Heading } from '@/components/typography/Heading'
import { SubHeading } from '@/components/typography/SubHeading'
import { Title } from '@/components/typography/Title'
import {
  articlesList,
  collaborateList,
  mediaList
} from '@/content/publications'
import { FontWeight } from '@/styles/StyleToken'

export default function Publications() {
  return (
    <>
      <Head>
        <title>Publications｜辻村研究室｜名古屋市立大学芸術工学部</title>
      </Head>

      <ArticleContainer>
        <Title>Publications</Title>
        <section>
          <Heading>Selected Articles</Heading>
          <SubHeading>主な研究業績</SubHeading>
          {articlesList.map((item, index) => (
            <_PublicationItem key={`publication${index}`}>
              <ExternalLink link={item.link} isBold>
                {item.title}
              </ExternalLink>
              <span>{item.translation}</span>
            </_PublicationItem>
          ))}
        </section>
        <section>
          <Heading>Collaborations</Heading>
          <SubHeading>共同研究</SubHeading>
          <_List>
            {collaborateList.map((item, index) => (
              <_ListItem key={`collaborate${index}`}>
                <ul>
                  {item.heading}
                  {item.content.map((subItem, subIndex) => (
                    <_SubListItem key={`content${subIndex}`}>
                      {subItem}
                    </_SubListItem>
                  ))}
                </ul>
              </_ListItem>
            ))}
          </_List>
        </section>
        <section>
          <Heading>Media Coverage</Heading>
          <SubHeading>メディア掲載情報</SubHeading>
          <_NewsList>
            {mediaList.map((item, index) => (
              <_NewsItem key={`media${index}`}>
                <span>{item.date}</span>
                <div>
                  <p>{item.heading}</p>
                  {item.link ? (
                    <ExternalLink link={item.link}>{item.media}</ExternalLink>
                  ) : (
                    <p>{item.media}</p>
                  )}
                </div>
              </_NewsItem>
            ))}
          </_NewsList>
        </section>
      </ArticleContainer>
    </>
  )
}

const _PublicationItem = styled.div`
  margin: 16px 0;

  span {
    display: inline-block;
    color: rgba(33, 33, 33, 0.6);
    font-size: 1rem;
    line-height: 1.25rem;
  }
`

const _List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 20px 0;
`

const _ListItem = styled.li`
  position: relative;
  padding-inline-start: 20px;
  font-weight: ${FontWeight.bold};
  font-size: 1rem;
  line-height: 1.75rem;

  &:before {
    content: '・';
    position: absolute;
    top: 0;
    left: 0;
  }
`

const _SubListItem = styled.li`
  position: relative;
  padding-inline-start: 20px;
  font-weight: ${FontWeight.regular};
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
