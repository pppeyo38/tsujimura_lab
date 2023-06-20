import { ReactNode } from 'react'

import { css } from '@linaria/core'

type Props = {
  children: ReactNode
}

export const Text = ({ children }: Props) => {
  return <p className={`${textStyle} ${marginY}`}>{children}</p>
}

export const textStyle = css`
  font-size: 1rem;
  line-height: 1.75rem;
`

const marginY = css`
  margin: 20px 0;
`
