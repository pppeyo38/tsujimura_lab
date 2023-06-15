import { styled } from '@linaria/react'

import { Color, FontWeight } from '@/styles/StyleToken'

export default function Footer() {
  return (
    <_Footer>
      <_Container>
        <_Inner>
          <_FooterName>
            <_FooterSubName>名古屋市立大学 芸術工学部</_FooterSubName>
            辻村誠一研究室
          </_FooterName>
          <_FooterAddress>
            〒464-0083 名古屋市千種区北千種2丁目1番10号
            <br />
            TEL052-721-1225 (代) FAX052-721-3110
          </_FooterAddress>
          <_CopyRight>© 2023 Tsujimura Laboratory</_CopyRight>
        </_Inner>
      </_Container>
    </_Footer>
  )
}

const _Footer = styled.footer`
  width: 100%;
  background: ${Color.main_blue};
`

const _Container = styled.div`
  max-width: 1200px;
  padding: 32px 0 20px;
  margin: 0 auto;
`

const _Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`

const _FooterName = styled.h2`
  color: ${Color.main_white};
  font-weight: ${FontWeight.bold};
  font-size: 24px;
`

const _FooterSubName = styled.span`
  display: block;
  margin-bottom: 8px;
  color: ${Color.main_white};
  font-size: 18px;
`

const _FooterAddress = styled.address`
  color: ${Color.main_white};
  font-size: 18px;
  line-height: 1.67;
`

const _CopyRight = styled.span`
  display: block;
  color: ${Color.main_white};
  font-size: 16px;
  text-align: center;
`
