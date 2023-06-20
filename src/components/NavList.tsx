import Link from 'next/link'
import { useRouter } from 'next/router'

import { css } from '@linaria/core'

import { Color, FontFamily, FontWeight } from '@/styles/StyleToken'

export const NavList = () => {
  const router = useRouter()

  return (
    <ol className={list}>
      <li className={`${listItem} ${router.pathname === '/' && isCurrent}`}>
        <Link href='/'>Top</Link>
      </li>
      <li
        className={`${listItem} ${
          router.pathname === '/laboratory' && isCurrent
        }`}
      >
        <Link href='/laboratory'>Lab Info</Link>
      </li>
      <li className={`${listItem} ${router.pathname === '/team' && isCurrent}`}>
        <Link href='/team'>Team</Link>
      </li>
      <li
        className={`${listItem} ${
          router.pathname === '/publications' && isCurrent
        }`}
      >
        <Link href='/publications'>Publications</Link>
      </li>
      <li
        className={`${listItem} ${
          router.pathname === '/equipments' && isCurrent
        }`}
      >
        <Link href='/equipments'>Equipments</Link>
      </li>
    </ol>
  )
}

const list = css`
  display: flex;
  gap: 24px;

  @media screen and (max-width: 830px) {
    flex-direction: column;
    align-items: center;
  }
`

const listItem = css`
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
      transform: scale(0, 1);
      transform-origin: center top;
    }

    &:hover::after {
      transform: scale(1, 1);
    }
  }
`

const isCurrent = css`
  &::after {
    transform: scale(1, 1);
  }
`
