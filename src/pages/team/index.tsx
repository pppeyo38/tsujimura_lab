import Head from 'next/head'

import { css } from '@linaria/core'

import { ArticleContainer } from '@/components/template/ArticleContainer'
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

      <ArticleContainer>
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
                  <th className={tHead}>{item.head}</th>
                  <td className={tData}>
                    {item.data.map((data, index) => (
                      <span key={index} className={nameWrap}>
                        {data}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </ArticleContainer>
    </>
  )
}

const tabelCell = {
  padding: '1.2rem 0',
  borderTop: '1px',
  borderBottom: '1px',
  borderStyle: 'solid',
  borderColor: 'rgba(33, 33, 33, 0.4)',
  fontSize: '1rem',
  lineHeight: '1.75rem'
}

const tHead = css`
  ${tabelCell}
  width: 160px;
`

const tData = css`
  ${tabelCell}
  word-break: keep-all;
`

const nameWrap = css`
  display: inline-flex;

  :not(:last-child) {
    margin-right: 0.5em;
    &:after {
      content: ',';
    }
  }
`
