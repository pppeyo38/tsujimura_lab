import { ReactNode } from 'react'

import { css } from '@linaria/core'

type Props = {
  children: ReactNode
}

export const ArticleContainer = ({ children }: Props) => {
  return (
    <article>
      <div className={inner}>{children}</div>
    </article>
  )
}

const inner = css`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 92%;
  max-width: 840px;
  margin: 0 auto;
  padding: calc(6rem + 64px) 0 6rem;
`
