import { ReactNode } from 'react'

import { css } from '@linaria/core'

type Props = {
  children: ReactNode
}

export const MovieContainer = ({ children }: Props) => {
  return <div className={videoWrap}>{children}</div>
}

const videoWrap = css`
  max-width: 560px;
  aspect-ratio: calc(560 / 315);
  margin: 0 auto 20px;
`
