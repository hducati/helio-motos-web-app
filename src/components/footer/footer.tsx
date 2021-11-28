import Link from 'next/link'

import { Logo } from '#/components/logo/logo'
import { Heading } from '#/components/heading/heading'
import * as S from '#/components/footer/styles'

const Footer = () => (
  <S.Wrapper>
    <Logo img="/img/old-logo.jpg" />

    <S.Content>
      <S.Column>
        <Heading lineBottom size="small">
          Contato
        </Heading>
        <a href="mailto:teste@gmail.com">mailto:teste@gmail.com</a>
      </S.Column>
      <S.Column>
        <Heading lineBottom size="small">
          Nos siga
        </Heading>
        <nav aria-labelledby="social-media">
          <a
            href="https://www.instagram.com/helio-motos"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/helio-motos"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/helio-motos"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>
      <S.Column>
        <Heading lineBottom size="small">
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>
      <S.Column>
        <Heading lineBottom size="small">
          Localização
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Helio Motos 2021 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
