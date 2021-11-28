import '!tests/match-media-mock'
import { render, screen } from '@testing-library/react'

import Slider from '#/components/slider/slider'

const settings = {
  slidesToShow: 1,
  infinite: false
}

describe('<Slider />', () => {
  it('should render children as a slider item', () => {
    const { container } = render(
      <Slider settings={settings}>
        <p>Item one</p>
        <p>Item two</p>
      </Slider>
    )

    const itemOne = screen.getByText(/item one/i).parentElement?.parentElement
    const itemTwo = screen.getByText(/item two/i).parentElement?.parentElement

    expect(itemOne).toHaveClass('slick-slide')
    expect(itemTwo).toHaveClass('slick-slide')

    expect(container).toMatchSnapshot()
  })
})
