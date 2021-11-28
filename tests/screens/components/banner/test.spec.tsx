import { screen } from '@testing-library/react'

import { Banner } from '#/screens/home/components/banner/banner'
import { renderWithTheme } from '!tests/helpers/render-with-theme'

const items = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Jaqueta Alpinestars SP-X',
  subtitle: 'Dê uma olhada em nossa mais nova Jaqueta, você vai adorar!',
  buttonLabel: 'Comprar',
  buttonLink: '/products/jaqueta'
}

describe('<Banner />', () => {
  it('should render the items correctly', () => {
    renderWithTheme(<Banner {...items} />)

    const title = screen.getByRole('heading', { name: items.title })
    const subtitle = screen.getByRole('heading', { name: items.subtitle })
    const img = screen.getByRole('img', { name: items.title })
    const link = screen.getByRole('link', { name: items.buttonLabel })

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(link).toBeInTheDocument()
  })
})
