import React from 'react'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'

import { ProductCardSliderProps } from '#/components/product-card-slider/types'
import { ProductCard } from '#/components/product-card/product-card'
import { SliderSettings } from '#/components/slider/types'
import Slider from '#/components/slider/slider'

import * as S from '#/components/product-card-slider/styles'

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: true,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRight aria-label="next products" />,
  prevArrow: <ArrowLeft aria-label="previous products" />,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
}

export const ProductCardSlider = ({ items }: ProductCardSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)
