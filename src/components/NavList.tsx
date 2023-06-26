import Link from 'next/link'

import { css } from '@linaria/core'

import { Color, FontFamily, FontWeight } from '@/styles/StyleToken'

type Props = {
  path: string
}

export const NavList = ({ path }: Props) => {
  return (
    <ol className={list}>
      <li className={`${listItem} ${path === '/' && isCurrent}`}>
        <Link href='/'>Top</Link>
      </li>
      <li className={`${listItem} ${path === '/laboratory' && isCurrent}`}>
        <Link href='/laboratory'>Lab Info</Link>
      </li>
      <li className={`${listItem} ${path === '/members' && isCurrent}`}>
        <Link href='/members'>Members</Link>
      </li>
      <li className={`${listItem} ${path === '/publications' && isCurrent}`}>
        <Link href='/publications'>Publications</Link>
      </li>
      <li className={`${listItem} ${path === '/student' && isCurrent}`}>
        <Link href='/student'>For Student</Link>
      </li>
    </ol>
  )
}

const list = css`
  display: flex;
  gap: 24px;

  @media screen and (width <= 830px) {
    flex-direction: column;
    align-items: center;
  }
`

const listItem = css`
  a {
    position: relative;
    font-family: ${FontFamily.nunito_sans};
    font-size: 1.1rem;
    font-weight: ${FontWeight.bold};
    line-height: 1.75rem;
    letter-spacing: 0.05rem;

    &::after {
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      content: '';
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
  a::after {
    transform: scale(1, 1);
  }
`
