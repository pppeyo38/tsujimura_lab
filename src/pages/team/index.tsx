import Head from 'next/head'

import { styled } from '@linaria/react'

import { ExternalLink } from '@/components/typography/ExternalLink'
import { Heading } from '@/components/typography/Heading'
import { Title } from '@/components/typography/Title'
import { memberList } from '@/content/team'

export default function Research() {
  return (
    <>
      <Head>
        <title>Team｜辻村研究室｜名古屋市立大学芸術工学部</title>
      </Head>

      <article>
        <_ArticleInner>
          <Title>Team</Title>
          <section>
            <Heading>Professor</Heading>
            <ExternalLink link="'https://nrd.nagoya-cu.ac.jp/profile/ja.0597f54a4f5fa058.html'">
              辻村 誠一 / Sei-ichi Tsujimura
            </ExternalLink>
          </section>
          <section>
            <Heading>Staffs and students</Heading>
            <table>
              <tbody>
                {memberList.map((item, index) => (
                  <tr key={index}>
                    <_TableHead>{item.head}</_TableHead>
                    <_TableData>
                      {item.data.map((data, index) => (
                        <_NameWrap key={index}>{data}</_NameWrap>
                      ))}
                    </_TableData>
                  </tr>
                ))}
              </tbody>
            </table>
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

const tabelCell = {
  padding: '1.2rem 0',
  borderTop: '1px',
  borderBottom: '1px',
  borderStyle: 'solid',
  borderColor: 'rgba(33, 33, 33, 0.4)',
  fontSize: '1rem',
  lineHeight: '1.75rem'
}

const _TableHead = styled.th`
  ${tabelCell}
  width: 160px;
`

const _TableData = styled.td`
  ${tabelCell}
  word-break: keep-all;
`

const _NameWrap = styled.span`
  display: inline-flex;

  :not(:last-child) {
    margin-right: 0.5em;
    &:after {
      content: ',';
    }
  }
`
