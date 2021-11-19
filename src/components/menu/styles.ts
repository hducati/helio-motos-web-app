import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { MenuFullProps } from '#/components/menu/types'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall};
    position: relative;
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`
export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;

    ${IconWrapper} {
      margin-right: ${theme.spacings.small};
    }
  `}
`

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isMenuOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    opacity: ${isMenuOpen ? 1 : 0};
    transition: ${theme.transition.default};
    pointer-events: ${isMenuOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }

    ${MenuNav} {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: center;
      align-items: center;
    }

    ${MenuLink} {
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.large};
      margin-bottom: ${theme.spacings.small};
      transform: ${isMenuOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: ${theme.transition.default};
    }

    ${RegisterBox} {
      transform: ${isMenuOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: ${theme.transition.default};
    }
  `}
`

export const MenuNav = styled.div`
  ${media.greaterThan('medium')`
    ${({ theme }) => css`
      margin-left: ${theme.spacings.small};
    `}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.red};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.red};
  `}
`
