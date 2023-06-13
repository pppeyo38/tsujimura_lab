import Head from 'next/head'

import { styled } from '@linaria/react'

export default function Home() {
  return (
    <_Container>
      <Head>
        <title>辻村研究室｜名古屋市立大学芸術工学部</title>
      </Head>

      <_Main>
        <_Title>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </_Title>
      </_Main>
    </_Container>
  )
}

const _Container = styled.div`
  padding: 0 2rem;
`

const _Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 4rem 0;
`

const _Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  line-height: 1.15;
`
