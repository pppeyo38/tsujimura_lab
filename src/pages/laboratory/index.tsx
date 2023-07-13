import Head from 'next/head'

import { css } from '@linaria/core'
import { useTranslation } from 'next-export-i18n'

import { ArticleContainer } from '@/components/template/ArticleContainer'
import { MovieContainer } from '@/components/template/MovieContainer'
import { Heading } from '@/components/typography/Heading'
import { SubHeading } from '@/components/typography/SubHeading'
import { Text, textStyle } from '@/components/typography/Text'
import { Title } from '@/components/typography/Title'

type EquipmentType = {
  name: string
  detail: string
  image: string
}

export default function Research() {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t('laboratory.title')}</title>
      </Head>

      <ArticleContainer>
        <section>
          <Title>Laboratory Information</Title>
          <Text>{t('laboratory.outline')}</Text>
        </section>

        <section>
          <Heading>Research</Heading>
          <SubHeading>{t('laboratory.section.research.subheading')}</SubHeading>
          {t('laboratory.section.research.content').map(
            (item: string, idx: number) => (
              <Text key={idx}>{item}</Text>
            )
          )}
        </section>

        <section>
          <Heading>Student research</Heading>
          <SubHeading>
            {t('laboratory.section.studentResearch.subheading')}
          </SubHeading>
          <ul className={list}>
            {t('laboratory.section.studentResearch.content').map(
              (item: string, idx: number) => (
                <li key={idx} className={listItem}>
                  {item}
                </li>
              )
            )}
          </ul>
        </section>

        <section>
          <Heading>Our recent activities</Heading>
          <SubHeading>
            {t('laboratory.section.recentActivities.subheading')}
          </SubHeading>
          <Text>{t('laboratory.section.recentActivities.content')}</Text>
          <MovieContainer>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/Yxtqz4ZRMU0'
              title='YouTube video player 【Jetbot】コース走行'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </MovieContainer>
        </section>

        <section>
          <Heading>Equipments</Heading>
          <ul className={equipmentList}>
            {t('laboratory.section.equipments').map(
              (item: EquipmentType, idx: number) => (
                <li key={idx} className={itemBlock}>
                  <div>
                    <SubHeading>{item.name}</SubHeading>
                    <Text>{item.detail}</Text>
                  </div>
                  <div className={imageBlock}>
                    <img src={item.image} alt={item.name} />
                  </div>
                </li>
              )
            )}
          </ul>
        </section>
      </ArticleContainer>
    </>
  )
}

const list = css`
  margin: 20px 0;
`

const listItem = css`
  position: relative;
  padding-inline-start: 20px;
  ${textStyle}

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '・';
  }
`

const equipmentList = css`
  display: flex;
  flex-direction: column;
  gap: 48px;
`

const itemBlock = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 20px;
  align-items: center;

  @media screen and (width <= 750px) {
    grid-template-columns: 1fr;
  }
`

const imageBlock = css`
  width: 100%;

  img {
    width: 100%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
  }
`
