import Head from 'next/head'

import { css } from '@linaria/core'

import { ArticleContainer } from '@/components/template/ArticleContainer'
import { Heading } from '@/components/typography/Heading'
import { Text } from '@/components/typography/Text'
import { Title } from '@/components/typography/Title'

export default function Equipments() {
  return (
    <>
      <Head>
        <title>Equipments｜辻村研究室｜名古屋市立大学芸術工学部</title>
      </Head>

      <ArticleContainer>
        <Title>Equipments</Title>
        <section className={itemBlock}>
          <Heading>分光放射輝度計</Heading>
          <Text>
            人間の目で見える光の領域380nm～780nm間で1nmピッチ毎の物理エネルギー量（絶対値）を測定します。またその値から計算にて高精度で輝度・色度・色温度・主波長等も算出されます。
            <br />
            様々な実験装置のキャリブレーションに用いています。
          </Text>
          <div className={imageBlock} />
        </section>
        <section className={itemBlock}>
          <Heading>分光放射照度計</Heading>
          <Text>
            分光放射照度計CL-500Aは、光の演色評価数、相関色温度、色度、照度（JIS一般形AA級）、暗所視照度、三刺激値、主波長刺激純度、ピーク波長、分光放射照度値（360nm～780nm
            1nmピッチ：外部出力のみ）の測定が可能な分光放射照度計です。
          </Text>
          <div className={imageBlock} />
        </section>
        <section className={itemBlock}>
          <Heading>2次元色彩輝度計</Heading>
          <Text>
            RTC-21(2次元色彩輝度計)は、一般的なRGB三原色カメラでは捉えられない幅広い色域の色情報が取得できる、人の眼と等価な感度のXYZ表色系を採用したカメラです。取得した広色域・高色忠実XYZ映像をPCで確認できます。PCでのXYZ画像のファイル保存・分析が可能です。
          </Text>
          <div className={imageBlock} />
        </section>
        <section className={itemBlock}>
          <Heading>LED Cube</Heading>
          <Text>
            THOUSLITE LEDCube
            は、独自の最適化アルゴリズムと10個の特殊なLEDを用いて、異なる分光分布（SPD）でのあらゆる照明環境シュミレーションを簡単で正確に実現にする「照明環境シュミレート光源」です。
          </Text>
          <div className={imageBlock} />
        </section>
      </ArticleContainer>
    </>
  )
}

const imageBlock = css`
  width: 100%;
  aspect-ratio: 3 / 2;
  margin-bottom: 16px;
  background-color: gray;
`

const itemBlock = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 0 20px;

  h2 {
    grid-column: 1/3;
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;

    h2 {
      grid-column: 1;
    }
  }
`
