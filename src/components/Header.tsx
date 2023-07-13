import { useEffect, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { css } from '@linaria/core'
import { useLanguageQuery } from 'next-export-i18n'

import { NavList } from '@/components/NavList'
import { Color } from '@/styles/StyleToken'
import HeaderIcon from 'public/header_icon.svg'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const router = useRouter()
  const [query] = useLanguageQuery()

  const toggleNavOpen = () => {
    setIsNavOpen(!isNavOpen)
  }

  useEffect(() => {
    setIsNavOpen(false)
  }, [router.pathname, query])

  useEffect(() => {
    isNavOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [isNavOpen])

  return (
    <header className={header}>
      <div className={container}>
        <div className={headerInner}>
          <Link href='/' className={headerTitle}>
            <HeaderIcon />
          </Link>
          <nav className={headerNavPc}>
            <NavList path={router.pathname} />
          </nav>
          <button className={headerMenuBtn} onClick={() => toggleNavOpen()}>
            <span className={`${menuBtnBar} ${isNavOpen && isMenuOpen}`} />
            <span className={`${menuBtnBar} ${isNavOpen && isMenuOpen}`} />
            <span className={`${menuBtnBar} ${isNavOpen && isMenuOpen}`} />
          </button>
          <div className={`${spNavWrap} ${isNavOpen && navActive} `}>
            <nav className={headerNavSp}>
              <NavList path={router.pathname} />
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

const header = css`
  position: fixed;
  z-index: 100;
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
`

const container = css`
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;

  @media screen and (width <= 830px) {
    padding: 0 20px;
  }
`

const headerInner = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`

const headerTitle = css`
  display: inline-flex;
`

const headerNavPc = css`
  @media screen and (width <= 830px) {
    display: none;
  }
`

const headerNavSp = css`
  display: none;

  @media screen and (width <= 830px) {
    display: block;
    margin-bottom: 64px;
  }
`

const headerMenuBtn = css`
  display: none;

  @media screen and (width <= 830px) {
    position: relative;
    display: block;
    width: 28px;
    height: 16px;
  }
`

const menuBtnBar = css`
  position: absolute;
  left: 0;
  display: block;
  width: 28px;
  height: 2px;
  background-color: ${Color.main_black};
  transition: all 0.4s;

  &:nth-child(1) {
    top: 0;
  }

  &:nth-child(2) {
    top: 8px;
    opacity: 1;
  }

  &:last-child {
    top: 16px;
  }
`

const isMenuOpen = css`
  &:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  &:nth-child(2) {
    opacity: 0;
  }

  &:last-child {
    transform: translateY(-8px) rotate(-45deg);
  }
`

const spNavWrap = css`
  display: none;

  @media screen and (width <= 830px) {
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
    transition-timing-function: ease;
    transition-duration: 0.3s;
    transition-property: opacity, transform;
    transform: translateY(-10px);
  }
`

const navActive = css`
  @media screen and (width <= 830px) {
    pointer-events: auto;
    opacity: 1;
    transform: translateY(0);
  }
`
