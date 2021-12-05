/* eslint-disable @next/next/no-img-element */
import * as S from '#/components/product-card/styles'
import { ProductCardProps } from '#/components/product-card/types'

export const ProductCard = ({
  brand,
  name,
  img,
  price,
  promotionalPrice
}: ProductCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} aria-label={`${name}-img`} />
    </S.ImageBox>

    <S.Content>
      <S.Info>
        <S.Name>{name}</S.Name>
        <S.Brand>{brand}</S.Brand>
      </S.Info>
      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)
