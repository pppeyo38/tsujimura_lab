import { ReactNode } from 'react'

import { styled } from '@linaria/react'

import { Color, FontWeight } from '@/styles/StyleToken'

type Props = {
  children: ReactNode
  link: string
  isBold?: boolean
}

export const ExternalLink = ({ children, link, isBold }: Props) => {
  return (
    <_Link href={link} target='_blank' rel='noopener' isBold={isBold}>
      {children}
    </_Link>
  )
}

const _Link = styled.a<{ isBold: boolean | undefined }>`
  display: inline-block;
  font-weight: ${(props) =>
    props.isBold ? FontWeight.bold : FontWeight.regular};
  font-size: 1rem;
  line-height: 1.75rem;
  text-decoration: underline;
  transition: 0.2s;

  &:hover {
    color: ${Color.main_grey};
  }
`
