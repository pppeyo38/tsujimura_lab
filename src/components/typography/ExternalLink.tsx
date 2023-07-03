import { ReactNode } from 'react'

import { css } from '@linaria/core'

import { textStyle } from '@/components/typography/Text'
import { Color, FontWeight } from '@/styles/StyleToken'

type Props = {
  children: ReactNode
  link: string
  isBold?: boolean
}

export const ExternalLink = ({ children, link, isBold }: Props) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener'
      className={`${exLink} ${isBold && linkBold}`}
    >
      {children}
    </a>
  )
}

const exLink = css`
  font-weight: ${FontWeight.regular};
  ${textStyle};

  text-decoration: underline;
  transition: 0.2s;

  &:hover {
    color: ${Color.main_grey};
  }

  &::after {
    display: inline-block;
    margin-left: 2px;
    content: url('/tsujimura/external-link.svg');
    transform: translateY(2px);
  }
`

const linkBold = css`
  font-weight: ${FontWeight.bold};
`
