import Head from 'next/head'
import Image from 'next/image'

import { css } from '@linaria/core'

import { ArticleContainer } from '@/components/template/ArticleContainer'
import { MovieContainer } from '@/components/template/MovieContainer'
import { Heading } from '@/components/typography/Heading'
import { SubHeading } from '@/components/typography/SubHeading'
import { Text, textStyle } from '@/components/typography/Text'
import { Title } from '@/components/typography/Title'
import { equipmentsList } from '@/content/equipments'

export default function Research() {
  return (
    <>
      <Head>
        <title>Lab Info｜辻村研究室｜名古屋市立大学芸術工学部</title>
      </Head>

      <ArticleContainer>
        <section>
          <Title>Laboratory Information</Title>
          <Text>
            生命を一つの汎用的情報処理システムとみなし、視覚情報である色や形、明るさ情報がどのような過程によって処理されるのかを神経生理学的、実験心理学的なアプローチで研究しています。
          </Text>
        </section>
        <section>
          <Heading>Research</Heading>
          <SubHeading>メラノプシン神経節細胞の研究</SubHeading>
          <Text>
            私たちは、色や明るさなどの感覚知覚情報処理と高次脳機能との関連性に着目しています。加えて、脳内で外界の光信号の符号化に関し重要な役割を担っているメラノプシン神経節細胞（intrinsically
            photosensitive retinal ganglion cell:
            ipRGCs以下、メラノプシン細胞）の機能解明にも着目しています。網膜での処理が生体内でどのように処理・統合され、脳内でどのように表現されているのかという疑問に答えることが私たちの目標です。私たちは、心理物理学的手法と神経生理学的手法を用いて研究に取り組んでいます。
            私たちの眼球の網膜には、２種類の光受容器（錐体細胞、桿体細胞）が存在いています。この2つの光受容器のみによって、ヒトはものを見たり識別したりしていると長年考えられてきました。
          </Text>
          <Text>
            しかしながら、３番目の光受容器であるメラノプシン細胞が発見されました。メラノプシン細胞はメラノプシンという光受容タンパク質を持つ細胞です。メラノプシン細胞の発見により、概日光制御や瞳孔光反射など、非撮像系経路(non-image-forming
            pathway)や撮像系経路(image-forming
            oathway)について根本的に見直されるようになりました。メラノプシン細胞は環境光を脳内で符号化する上で重要な役割を担っていると考えられています。環境光によって刺激されたメラノプシン細胞からの信号は、杆体や錐体といった古典的な視細胞からの信号とともに、非撮像系経路や撮像系経路の脳内機能に寄与しています。
          </Text>
          <Text>
            私たちの研究グループでは世界で初めてメラノプシン細胞が明るさの知覚に寄与していることを発見しました。一方で、概日リズムの調節や瞳孔の対光反応、明るさの知覚等はメラノプシン細胞の機能のごく一部であり、メラノプシン細胞の機能はまだ他にもあるのではないかと考えられています。例えば、記憶や注意、気分、偏頭痛などにも影響するかもしれません。
          </Text>
        </section>
        <section>
          <Heading>Student research</Heading>
          <SubHeading>実験心理学・脳神経科学</SubHeading>
          <ul className={list}>
            <li className={listItem}>
              メラノプシン神経節細胞の瞳孔径路への寄与の解明
            </li>
            <li className={listItem}>
              色、輝度情報とメラノプシン神経節細胞との機能的関連性
            </li>
            <li className={listItem}>光環境が概日リズムに及ぼす影響の解明</li>
            <li className={listItem}>ヒトの色の知覚メカニズムの解明</li>
            <li className={listItem}>ヒトの明るさ知覚メカニズムの解明</li>
          </ul>
        </section>
        <section>
          <Heading>Our recent activities</Heading>
          <SubHeading>研究室での実験</SubHeading>
          <Text>
            NVIDAのJetson Nanoを搭載したSparkFun JetBot AI
            ロボットキットを利用してディープラーニングを勉強しました。以下の動画は、衝突回避走行デモを用いて落下回避と衝突回避を学習させて試走させた時のものです。
          </Text>
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
          {equipmentsList.map((item, index) => (
            <div key={index} className={itemBlock}>
              <div>
                <SubHeading>{item.name}</SubHeading>
                <Text>{item.detail}</Text>
              </div>
              <div className={imageBlock}>
                <Image src={item.image} alt={item.name} fill />
              </div>
            </div>
          ))}
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

  &:before {
    content: '・';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`

const itemBlock = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 0 20px;
  padding: 16px 0;

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`

const imageBlock = css`
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 2;
  background-color: gray;

  image {
    object-fit: cover;
  }
`
