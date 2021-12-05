import React from 'react'

import { ShowcaseProps } from '#/components/showcase/types'
import { Heading } from '#/components/heading/heading'
import { ProductCardSlider } from '#/components/product-card-slider/product-card-slider'

import * as S from '#/components/showcase/styles'

export const Showcase = ({ title, products }: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && <Heading lineLeft>{title}</Heading>}
    {!!products && <ProductCardSlider items={products}></ProductCardSlider>}
  </S.Wrapper>
)
