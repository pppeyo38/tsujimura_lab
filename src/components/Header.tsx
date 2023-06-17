import Link from 'next/link'

import { styled } from '@linaria/react'

export default function Header() {
  return (
    <_Header>
      <_Container>
        <_HeaderInner>
          <_HeaderTitle>
            <Link href='/'>Tsujimura Lab.</Link>
          </_HeaderTitle>
          <nav>
            <_HeaderNav>
              <_HeaderNavItem>
                <Link href='/'>Top</Link>
              </_HeaderNavItem>
              <_HeaderNavItem>
                <Link href='/laboratory'>Lab Info</Link>
              </_HeaderNavItem>
              <_HeaderNavItem>
                <Link href='/team'>Team</Link>
              </_HeaderNavItem>
              <_HeaderNavItem>
                <Link href='/publications'>Publications</Link>
              </_HeaderNavItem>
              <_HeaderNavItem>
                <Link href='/equipment'>Equipment</Link>
              </_HeaderNavItem>
            </_HeaderNav>
          </nav>
        </_HeaderInner>
      </_Container>
    </_Header>
  )
}

const _Header = styled.header`
  width: 100%;
  background: #fff;
`

const _Container = styled.div`
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;
`

const _HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`

const _HeaderTitle = styled.div`
  a {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 28px;
    font-weight: 900;
    letter-spacing: 0.05em;
  }
`

const _HeaderNav = styled.ol`
  display: flex;
  gap: 20px;
`

const _HeaderNavItem = styled.li`
  a {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.375;
    letter-spacing: 0.05rem;
  }
`
