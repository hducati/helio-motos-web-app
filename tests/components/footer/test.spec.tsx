import { screen } from '@testing-library/react'

import Footer from '#/components/footer/footer'
import { renderWithTheme } from '!tests/helpers/render-with-theme'

describe('<Footer />', () => {
  it('should render the logo', () => {
    renderWithTheme(<Footer />)

    const logo = screen.getByRole('img', { name: /helio motos/i })

    expect(logo).toBeInTheDocument()
  })

  it('should render contact, follow us, links and location', () => {
    renderWithTheme(<Footer />)

    const contact = screen.getByRole('heading', { name: /contato/i })
    const followUs = screen.getByRole('heading', { name: /nos siga/i })
    const links = screen.getByRole('heading', { name: /links/i })
    const location = screen.getByRole('heading', { name: /localização/i })

    expect(contact).toBeInTheDocument()
    expect(followUs).toBeInTheDocument()
    expect(links).toBeInTheDocument()
    expect(location).toBeInTheDocument()
  })

  it('should render copyrights', () => {
    renderWithTheme(<Footer />)

    const copyrights = screen.getByText(
      /helio Motos 2021 © all rights reserved./i
    )

    expect(copyrights).toBeInTheDocument()
  })
})
