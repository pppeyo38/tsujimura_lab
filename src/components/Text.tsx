import { ReactNode } from 'react'

import { styled } from '@linaria/react'

import { FontFamily } from '@/styles/StyleToken'

type Props = {
  children: ReactNode
}

export const Text = ({ children }: Props) => {
  return <_Text>{children}</_Text>
}

const _Text = styled.p`
  font-family: ${FontFamily.zenkaku_gothic};
  font-size: 1rem;
  line-height: 1.75rem;
`
