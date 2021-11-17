import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { breakpoint, MediaMatchProps } from '#/components/media-match/types'

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)` display: block`}
  `,

  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)` display: block`}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
