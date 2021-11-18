import * as S from '#/components/logo/styles'
import { LogoProps } from '#/components/logo/types'

const Logo = ({ img, size = 'medium' }: LogoProps) => (
  <S.Wrapper size={size}>
    <S.Image
      src={process.env.PUBLIC_URL + img}
      role="img"
      aria-label="Helio motos logo"
    />
  </S.Wrapper>
)

export default Logo
