import styled, { css } from 'styled-components'
import { Container } from '#/components/container/container'
import * as HeadingStyles from '#/components/heading/styles'
import * as ProductCardSlider from '#/components/product-card-slider/styles'

export const Wrapper = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${ProductCardSlider.Wrapper} {
      margin-bottom: ${theme.spacings.small};
    }

    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`
