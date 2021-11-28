import * as S from '#/screens/home/components/banner/styles'
import { BannerProps } from '#/screens/home/components/banner/types'
import Button from '#/components/button/button'

export const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink
}: BannerProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" aria-label={title} />

    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)
