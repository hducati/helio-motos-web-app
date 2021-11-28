import '!tests/match-media-mock'

import { BannerSlider } from '#/screens/home/components/banner-slider/banner-slider'
import { renderWithTheme } from '!tests/helpers/render-with-theme'
import { bannerSliderItems } from '#/fake/banner-slider-mock'

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(
      <BannerSlider items={bannerSliderItems} />
    )

    const verticalSlider = container.querySelector('.slick-vertical')

    expect(verticalSlider).toBeInTheDocument()
  })

  it('should render one active item', () => {
    const { container } = renderWithTheme(
      <BannerSlider items={bannerSliderItems} />
    )

    const slickActiveItem = container.querySelectorAll('li.slick-active')

    expect(slickActiveItem).toHaveLength(1)
  })

  it('should render the dots', () => {
    const { container } = renderWithTheme(
      <BannerSlider items={bannerSliderItems} />
    )

    const dots = container.querySelector('.slick-dots')

    expect(dots).toBeInTheDocument()
  })
})
