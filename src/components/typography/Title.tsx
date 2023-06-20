import { ReactNode } from 'react'

import { css } from '@linaria/core'

import { FontFamily, FontWeight } from '@/styles/StyleToken'

type Props = {
  children: ReactNode
}

export const Title = ({ children }: Props) => {
  return <h1 className={title}>{children}</h1>
}

const title = css`
  margin-bottom: 0.83em;
  font-weight: ${FontWeight.bold};
  font-family: ${FontFamily.nunito_sans};
  font-size: 2rem;
  line-height: 2.5rem;
  letter-spacing: 0.02em;
`
