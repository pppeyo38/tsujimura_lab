import { useState } from 'react'

import Link from 'next/link'

import { css } from '@linaria/core'

import { styled } from '@linaria/react'

import { NavList } from '@/components/NavList'
import { Color, FontFamily, FontWeight } from '@/styles/StyleToken'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNavOpen = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <header className={header}>
      <_Container>
        <_HeaderInner>
          <_HeaderTitle>
            <Link href='/'>Tsujimura Lab.</Link>
          </_HeaderTitle>
          <_HeaderNav>
            <NavList />
          </_HeaderNav>
          <_HeaderMenuBtn onClick={() => toggleNavOpen()}>
            <_MenuBtnBar isOpen={isNavOpen} />
            <_MenuBtnBar isOpen={isNavOpen} />
            <_MenuBtnBar isOpen={isNavOpen} />
          </_HeaderMenuBtn>
          <div
            className={`${spNavMenuWrap} ${
              isNavOpen ? navFadeIn : navFadeOut
            } `}
          >
            <_SpHeaderNav>
              <NavList />
            </_SpHeaderNav>
          </div>
        </_HeaderInner>
      </_Container>
    </header>
  )
}

const header = css`
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

const spNavMenuWrap = css`
  display: none;

  @media screen and (max-width: 830px) {
    position: fixed;
    top: 64px;
    left: 0;
    z-index: -1;
    display: grid;
    place-content: center;
    width: 100%;
    height: calc(100svh - 64px);
    background-color: ${Color.main_white};
    opacity: 0;
  }
`

const navFadeIn = css`
  @keyframes FadeIn {
    0% {
      opacity: 0;
      z-index: -1;
    }
    100% {
      opacity: 1;
      z-index: 1;
    }
  }

  @media screen and (max-width: 830px) {
    animation: FadeIn 0.4s forwards;
  }
`

const navFadeOut = css`
  @keyframes FadeOut {
    0% {
      opacity: 1;
      z-index: 1;
    }
    100% {
      opacity: 0;
      z-index: -1;
    }
  }

  @media screen and (max-width: 830px) {
    animation: FadeOut 0.4s forwards;
  }
`
