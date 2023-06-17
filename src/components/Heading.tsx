import { ReactNode } from 'react'

import { styled } from '@linaria/react'

import { Color, FontFamily, FontWeight } from '@/styles/StyleToken'

type Props = {
  children: ReactNode
}

export const Heading = ({ children }: Props) => {
  return <_Heading>{children}</_Heading>
}

const _Heading = styled.h2`
  padding: 2px 8px;
  background-color: #d8ebf0;
  color: ${Color.main_black};
  font-weight: ${FontWeight.bold};
  font-family: ${FontFamily.nunito_sans};
  font-size: 1.625rem;
  line-height: 2.25rem;
  letter-spacing: 0.02em;
`
