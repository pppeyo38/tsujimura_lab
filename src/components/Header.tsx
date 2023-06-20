import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { styled } from '@linaria/react'

import { Color, FontFamily, FontWeight } from '@/styles/StyleToken'

export default function Header() {
  const router = useRouter()
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNavOpen = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <_Header>
      <_Container>
        <_HeaderInner>
          <_HeaderTitle>
            <Link href='/'>Tsujimura Lab.</Link>
          </_HeaderTitle>
          <_HeaderNav>
            <_HeaderNavList>
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
              <_HeaderNavItem isCurrent={router.pathname === '/equipments'}>
                <Link href='/equipments'>Equipments</Link>
              </_HeaderNavItem>
            </_HeaderNavList>
          </_HeaderNav>
          <_HeaderMenuBtn onClick={() => toggleNavOpen()}>
            <_MenuBtnBar isOpen={isNavOpen} />
            <_MenuBtnBar isOpen={isNavOpen} />
            <_MenuBtnBar isOpen={isNavOpen} />
          </_HeaderMenuBtn>
          <_SpNavMenuWrap isOpen={isNavOpen}>
            <_SpHeaderNav>
              <_HeaderNavList>
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
                <_HeaderNavItem isCurrent={router.pathname === '/equipments'}>
                  <Link href='/equipments'>Equipments</Link>
                </_HeaderNavItem>
              </_HeaderNavList>
            </_SpHeaderNav>
          </_SpNavMenuWrap>
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

const _HeaderNav = styled.nav`
  @media screen and (max-width: 830px) {
    display: none;
  }
`

const _SpHeaderNav = styled.nav`
  display: none;

  @media screen and (max-width: 830px) {
    display: block;
    margin-bottom: 64px;
  }
`

const _HeaderNavList = styled.ol`
  display: flex;
  gap: 24px;

  @media screen and (max-width: 830px) {
    flex-direction: column;
    align-items: center;
  }
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

const _HeaderMenuBtn = styled.button`
  display: none;

  @media screen and (max-width: 830px) {
    position: relative;
    display: block;
    width: 28px;
    height: 16px;
  }
`

const _MenuBtnBar = styled.span<{ isOpen: boolean }>`
  position: absolute;
  display: block;
  left: 0;
  width: 28px;
  height: 2px;
  background-color: ${Color.main_black};
  transition: all 0.4s;

  &:nth-child(1) {
    top: 0;
    transform: ${(props) =>
      props.isOpen ? 'translateY(8px) rotate(45deg)' : ''};
  }

  &:nth-child(2) {
    top: 8px;
    opacity: ${(props) => (props.isOpen ? '0' : '1')};
  }

  &:last-child {
    top: 16px;
    transform: ${(props) =>
      props.isOpen ? 'translateY(-8px) rotate(-45deg)' : ''};
  }
`

const _SpNavMenuWrap = styled.div<{ isOpen: boolean }>`
  display: none;

  @media screen and (max-width: 830px) {
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    place-content: center;
    width: 100%;
    height: calc(100svh - 64px);
    background-color: ${Color.main_white};
    transform: ${(props) =>
      props.isOpen ? 'translateY(calc(0% + 64px))' : 'translateY(-120%)'};
    transition: all 0.8s;
  }
`
