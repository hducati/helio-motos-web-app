import styled, { css } from 'styled-components'
import { ImageProps, WrapperProps } from '#/components/logo/types'

const wrapperModifiers = {
  small: () => css`
    width: 8rem;
    height: 2.6rem;
  `,
  medium: () => css`
    width: 11rem;
    height: 4rem;
  `,
  large: () => css`
    width: 22rem;
    height: 8rem;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ size }) => css`
    ${!!size && wrapperModifiers[size]}
  `}
`
export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    width: 100%;
    height: 100%;
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
  `}
`
