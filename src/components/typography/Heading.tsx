import { ReactNode } from 'react'

import { css } from '@linaria/core'

import { FontFamily, FontWeight } from '@/styles/StyleToken'

type Props = {
  children: ReactNode
}

export const Heading = ({ children }: Props) => {
  return <h2 className={heading}>{children}</h2>
}

const heading = css`
  margin-bottom: 24px;
  padding: 2px 8px;
  background-color: #d8ebf0;
  font-weight: ${FontWeight.bold};
  font-family: ${FontFamily.nunito_sans};
  font-size: 1.625rem;
  line-height: 2.25rem;
  letter-spacing: 0.02em;
`
