import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Link from 'next/link'

import * as S from '#/components/menu/styles'
import { MenuProps } from '#/components/menu/types'
import { MediaMatch } from '#/components/media-match/media-match'
import { Logo } from '#/components/logo/logo'
import Button from '#/components/button/button'

const Menu = ({ username }: MenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsMenuOpen(true)}>
          <MenuIcon aria-label="Open menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo img="/img/old-logo.jpg" />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Principal</S.MenuLink>
          <S.MenuLink href="#">Loja</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>

        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open shopping cart" />
        </S.IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Link href="/sign-in" passHref>
              <Button as="a">Entrar</Button>
            </Link>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isMenuOpen} isMenuOpen={isMenuOpen}>
        <CloseIcon
          aria-label="Close Menu"
          onClick={() => setIsMenuOpen(false)}
        />
        <S.MenuNav>
          <S.MenuLink href="#">Principal</S.MenuLink>
          <S.MenuLink href="#">Loja</S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="#">Minha conta</S.MenuLink>
              <S.MenuLink href="#">Sair</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <>
              <Link href="/sign-in" passHref>
                <Button fullWidth size="large" as="a">
                  Entrar
                </Button>
              </Link>
              <span>ou</span>
              <Link href="/sign-up" passHref>
                <S.CreateAccount href="#" title="Sign In">
                  Criar conta
                </S.CreateAccount>
              </Link>
            </>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
