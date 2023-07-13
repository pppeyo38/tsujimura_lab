import Link from 'next/link'

import { css } from '@linaria/core'
import { LanguageSwitcher } from 'next-export-i18n'

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
      <li className={`${listItem} ${path === '/students' && isCurrent}`}>
        <Link href='/students'>For Students</Link>
      </li>
      <li className={listItem}>
        <LanguageSwitcher lang='ja'>ja</LanguageSwitcher> |{' '}
        <LanguageSwitcher lang='en'>en</LanguageSwitcher>
      </li>
    </ol>
  )
}

const textStyle = {
  fontFamily: `${FontFamily.nunito_sans}`,
  fontSize: '1.1rem',
  fontWeight: `${FontWeight.bold}`,
  lineHeight: '1.75rem',
  letterSpacing: '0.05rem'
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
    ${textStyle};

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

  span {
    ${textStyle};
    cursor: pointer;

    &[data-is-current='false'] {
      color: ${Color.main_grey};
    }
  }
`

const isCurrent = css`
  a::after {
    transform: scale(1, 1);
  }
`
