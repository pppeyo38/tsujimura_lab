import { css } from '@linaria/core'
import { useTranslation } from 'next-export-i18n'

import { textStyle } from '@/components/typography/Text'
import { Color, FontWeight } from '@/styles/StyleToken'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className={footer}>
      <div className={container}>
        <div className={inner}>
          <h2 className={footerName}>
            <span className={footerSubName}>{t('nav.schoolName')}</span>
            {t('nav.labName')}
          </h2>
          <address className={footerAddress}>
            {t('nav.adress1')}
            <br className={spOnlyBr} />
            {t('nav.adress2')}
            <br />
            {t('nav.adress3')}
          </address>
          <span className={copyRight}>© 2023 Tsujimura Laboratory</span>
        </div>
      </div>
    </footer>
  )
}

const footer = css`
  width: 100%;
  background: ${Color.main_blue};
`

const container = css`
  max-width: 1200px;
  padding: 32px 40px 20px;
  margin: 0 auto;

  @media screen and (width <= 830px) {
    padding: 32px 20px 20px;
  }
`

const inner = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const footerName = css`
  font-size: 1.3125rem;
  font-weight: ${FontWeight.bold};
  line-height: 1.75rem;
  color: ${Color.main_white};
`

const footerSubName = css`
  display: block;
  color: ${Color.main_white};
  ${textStyle}
`

const footerAddress = css`
  color: ${Color.main_white};
  ${textStyle}
`

const spOnlyBr = css`
  display: none;

  @media screen and (width <= 424px) {
    display: block;
  }
`

const copyRight = css`
  display: block;
  font-size: 0.9rem;
  color: ${Color.main_white};
  text-align: center;
`
