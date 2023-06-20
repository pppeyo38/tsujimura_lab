import { ReactNode } from 'react'

import { css } from '@linaria/core'

type Props = {
  children: ReactNode
}

export const Text = ({ children }: Props) => {
  return <p className={text}>{children}</p>
}

export const textStyle = {
  fontSize: '1rem',
  lineHeight: '1.75rem'
}

const text = css`
  ${textStyle};
  margin: 20px 0;
`
