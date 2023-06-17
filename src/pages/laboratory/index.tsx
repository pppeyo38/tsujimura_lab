import Head from 'next/head'

import { styled } from '@linaria/react'

import { Heading } from '@/components/Heading'
import { Title } from '@/components/Title'

export default function Research() {
  return (
    <>
      <Head>
        <title>研究実績｜辻村研究室｜名古屋市立大学芸術工学部</title>
      </Head>

      <_Block>
        <_ArticleContainer>
          <Title>Laboratory Information</Title>
          <Heading>Research</Heading>
          <Heading>Student research and projects</Heading>
          <Heading>Our recent activities</Heading>
        </_ArticleContainer>
      </_Block>
    </>
  )
}

const _Block = styled.article`
  margin: 80px 0;
`

const _ArticleContainer = styled.div`
  width: 100%;
  max-width: 840px;
  margin: 0 auto;
`
