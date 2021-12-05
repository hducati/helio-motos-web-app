import styled, { css, DefaultTheme } from 'styled-components'
import { PriceProps } from './types'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
  `}
`

export const ImageBox = styled.div`
  height: 14rem;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }

    100% {
      background-position: 40rem 0;
    }
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin: ${theme.spacings.xxsmall};
  `}
`

export const Info = styled.div`
  max-width: calc(100% - 2.5rem);
`

export const Name = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    line-height: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Brand = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
    margin-top: ${theme.spacings.xxsmall};
  `}
`

export const BuyBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    margin-top: ${theme.spacings.xxsmall};
  `}
`

const priceModifiers = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    padding: 0 ${theme.spacings.xxsmall};
    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
  `,
  promotional: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
    text-decoration: line-through;
    font-size: ${theme.font.sizes.small};
    margin-right: ${theme.spacings.xxsmall};
  `
}

export const Price = styled.h3<PriceProps>`
  ${({ theme, isPromotional }) => css`
    display: inline-flex;
    font-weight: ${theme.font.bold};
    height: 3rem;
    align-items: center;

    ${!isPromotional
      ? priceModifiers.default(theme)
      : priceModifiers.promotional(theme)}
  `}
`
