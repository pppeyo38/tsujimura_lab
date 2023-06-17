import { ReactNode } from 'react'

import { styled } from '@linaria/react'

import { FontFamily, FontWeight } from '@/styles/StyleToken'

type Props = {
  children: ReactNode
}

export const SubHeading = ({ children }: Props) => {
  return <_SubHeading>{children}</_SubHeading>
}

const _SubHeading = styled.h3`
  margin-bottom: 16px;
  font-weight: ${FontWeight.bold};
  font-family: ${FontFamily.zenkaku_gothic};
  font-size: 1.3125rem;
  line-height: 1.75rem;
`
