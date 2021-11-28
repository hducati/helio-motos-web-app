import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer``

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr);
    `};
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: flex;
      color: ${theme.colors.darkGray};
      text-decoration: none;
      margin-bottom: ${theme.spacings.small};
      font-size: ${theme.font.sizes.small};
    }

    a:hover {
      text-decoration: underline;
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.medium};
    border-top: 2px solid ${theme.colors.lightGray};
    padding: ${theme.spacings.small} 0;
  `}
`