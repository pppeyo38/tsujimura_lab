import { ReactNode } from 'react'

import { styled } from '@linaria/react'

import { FontFamily, FontWeight } from '@/styles/StyleToken'

type Props = {
  children: ReactNode
}

export const Title = ({ children }: Props) => {
  return <_Title>{children}</_Title>
}

const _Title = styled.h1`
  font-weight: ${FontWeight.bold};
  font-family: ${FontFamily.nunito_sans};
  font-size: 2rem;
  line-height: 2.5rem;
  letter-spacing: 0.02em;
`
