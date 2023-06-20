import { ReactNode } from 'react'

import { styled } from '@linaria/react'

type Props = {
  children: ReactNode
}

export const ArticleContainer = ({ children }: Props) => {
  return (
    <article>
      <_ArticleInner>{children}</_ArticleInner>
    </article>
  )
}

const _ArticleInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 88%;
  max-width: 840px;
  margin: 0 auto;
  padding: calc(6rem + 64px) 0 6rem;
`
