import { forwardRef } from 'react'
import * as S from '#/components/button/styles'
import { ButtonProps, WrapperProps } from '#/components/button/types'

const Button: React.ForwardRefRenderFunction<WrapperProps, ButtonProps> = (
  { children, size = 'medium', fullWidth, icon, ...props },
  ref
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    ref={ref}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
