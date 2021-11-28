import { BannerSliderProps } from '#/screens/home/components/banner-slider/types'
import { Banner } from '#/screens/home/components/banner/banner'
import { settings } from '#/screens/home/components/banner-slider/slider-settings'
import Slider from '#/components/slider/slider'
import * as S from '#/screens/home/components/banner-slider/styles'

export const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)
