import { ReactNode } from 'react'

import { css } from '@linaria/core'

import { FontWeight } from '@/styles/StyleToken'

type Props = {
  children: ReactNode
}

export const SubHeading = ({ children }: Props) => {
  return <h3 className={`${subHeadingStyle} ${marginBtm}`}>{children}</h3>
}

export const subHeadingStyle = css`
  font-weight: ${FontWeight.bold};
  font-size: 1.3125rem;
  line-height: 1.75rem;
`

const marginBtm = css`
  margin-bottom: 16px;
`
