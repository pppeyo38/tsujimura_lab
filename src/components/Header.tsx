import Link from 'next/link'
import { useRouter } from 'next/router'

import { styled } from '@linaria/react'

import { Color, FontFamily, FontWeight } from '@/styles/StyleToken'

export default function Header() {
  const router = useRouter()

  return (
    <_Header>
      <_Container>
        <_HeaderInner>
          <_HeaderTitle>
            <Link href='/'>Tsujimura Lab.</Link>
          </_HeaderTitle>
          <nav>
            <_HeaderNav>
              <_HeaderNavItem isCurrent={router.pathname === '/'}>
                <Link href='/'>Top</Link>
              </_HeaderNavItem>
              <_HeaderNavItem isCurrent={router.pathname === '/laboratory'}>
                <Link href='/laboratory'>Lab Info</Link>
              </_HeaderNavItem>
              <_HeaderNavItem isCurrent={router.pathname === '/team'}>
                <Link href='/team'>Team</Link>
              </_HeaderNavItem>
              <_HeaderNavItem isCurrent={router.pathname === '/publications'}>
                <Link href='/publications'>Publications</Link>
              </_HeaderNavItem>
              <_HeaderNavItem isCurrent={router.pathname === '/equipment'}>
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
  position: fixed;
  z-index: 100;
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
    font-family: ${FontFamily.nunito_sans};
    font-weight: ${FontWeight.black};
    font-size: 28px;
    letter-spacing: 0.05em;
  }
`

const _HeaderNav = styled.ol`
  display: flex;
  gap: 24px;
`

const _HeaderNavItem = styled.li<{ isCurrent: boolean }>`
  a {
    position: relative;
    font-family: ${FontFamily.nunito_sans};
    font-weight: ${FontWeight.bold};
    font-size: 1.1rem;
    line-height: 1.75rem;
    letter-spacing: 0.05rem;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${Color.main_black};
      transition: all 0.3s;
      transform: ${(props) =>
        props.isCurrent ? 'scale(1, 1)' : 'scale(0, 1)'};
      transform-origin: center top;
    }

    &:hover::after {
      transform: scale(1, 1);
    }
  }
`
