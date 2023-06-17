import Head from 'next/head'

import { styled } from '@linaria/react'

import { ExternalLink } from '@/components/typography/ExternalLink'
import { Heading } from '@/components/typography/Heading'
import { Title } from '@/components/typography/Title'

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
              <tr>
                <_TableHead>研究員</_TableHead>
                <_TableData>齋藤 真里菜 / Marina Saito</_TableData>
              </tr>
              <tr>
                <_TableHead>研究補助員</_TableHead>
                <_TableData>
                  若松 夏芽 / Natsume Wakamatsu，藤田 優之 / Yuno Hujita
                </_TableData>
              </tr>
              <tr>
                <_TableHead>大学院修士課程</_TableHead>
                <_TableData>藤田 優之 / Yuno Hujita</_TableData>
              </tr>
              <tr>
                <_TableHead>学部</_TableHead>
                <_TableData>
                  森 璃弥武 / Lyam Mori，大竹 未来 / Miku Otake，三品 佳穂 /
                  Kaho Mishina，滝川 瑞季 / Takigawa Mizuki，中嶋 莉那 / Rina
                  Nakazima，岩崎 百花 / Momoka Iwasaki，嬉野 友妃菜 / Yukina
                  Ureshino
                </_TableData>
              </tr>
              <tr>
                <_TableHead>同窓生</_TableHead>
                <_TableData>
                  伊藤 登萌 / Tomoe Ito，高須 葵 / Aoi Takasu，Bullot
                  Loïc(2021)，Vincent Conus(2020)，Yan Michellod (2019)
                </_TableData>
              </tr>
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
  width: 160px;
  ${tabelCell}
`

const _TableData = styled.td`
  ${tabelCell}
`
