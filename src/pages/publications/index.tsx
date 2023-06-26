import Head from 'next/head'

import { css } from '@linaria/core'

import { ArticleContainer } from '@/components/template/ArticleContainer'
import { ExternalLink } from '@/components/typography/ExternalLink'
import { Heading } from '@/components/typography/Heading'
import { SubHeading } from '@/components/typography/SubHeading'
import { textStyle } from '@/components/typography/Text'
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
          <ul className={listStyle}>
            {articlesList.map((item, index) => (
              <li key={`publication${index}`}>
                {item.link ? (
                  <ExternalLink link={item.link} isBold>
                    {item.title}
                  </ExternalLink>
                ) : (
                  <p className={articleTitle}>{item.title}</p>
                )}
                <span className={translate}>{item.translation}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <Heading>Collaborations</Heading>
          <SubHeading>共同研究</SubHeading>
          <ul className={listStyle}>
            {collaborateList.map((item, index) => (
              <li key={`collaborate${index}`} className={clListItem}>
                <ul>
                  {item.heading}
                  {item.content.map((subItem, subIndex) => (
                    <li key={`content${subIndex}`} className={clSubListItem}>
                      {subItem}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <Heading>Media Coverage</Heading>
          <SubHeading>メディア掲載情報</SubHeading>
          <ul className={listStyle}>
            {mediaList.map((item, index) => (
              <li key={`media${index}`} className={newsItem}>
                <span>{item.date}</span>
                <div>
                  <p>{item.heading}</p>
                  {item.link ? (
                    <ExternalLink link={item.link}>{item.media}</ExternalLink>
                  ) : (
                    <p>{item.media}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </ArticleContainer>
    </>
  )
}

const listStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 20px 0;
`

const articleTitle = css`
  margin: 0;
  font-weight: ${FontWeight.bold};
  ${textStyle};
`

const translate = css`
  display: inline-block;
  color: rgba(33, 33, 33, 0.6);
  font-size: 1rem;
  line-height: 1.25rem;
`

const clListItem = css`
  position: relative;
  padding-inline-start: 20px;
  font-weight: ${FontWeight.bold};
  ${textStyle};

  &:before {
    content: '・';
    position: absolute;
    top: 0;
    left: 0;
  }
`

const clSubListItem = css`
  position: relative;
  padding-inline-start: 20px;
  font-weight: ${FontWeight.regular};
  ${textStyle};

  &:before {
    content: '・';
    position: absolute;
    top: 0;
    left: 0;
  }
`

const newsItem = css`
  display: inline-flex;
  ${textStyle};

  span {
    display: inline-block;
    min-width: 120px;
  }
`
