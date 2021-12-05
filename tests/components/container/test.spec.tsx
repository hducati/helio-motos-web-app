import { renderWithTheme } from '!tests/helpers/render-with-theme'
import { Container } from '#/components/container/container'

import theme from '#/theme/theme'

describe('<Container />', () => {
  it('should render the styles correctly', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Helio motos</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  width: 100%;
  max-width: 130rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: calc(3.2rem / 2);
  padding-right: calc(3.2rem / 2);
}

<div
  class="c0"
>
  <span>
    Helio motos
  </span>
</div>
`)
  })
})
