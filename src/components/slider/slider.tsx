import { forwardRef } from 'react'
import { SliderProps } from '#/components/slider/types'
import SlickSlider from 'react-slick'

import * as S from '#/components/slider/styles'

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => (
  <S.Wrapper>
    <SlickSlider ref={ref} {...settings}>
      {children}
    </SlickSlider>
  </S.Wrapper>
)

export default forwardRef(Slider)
