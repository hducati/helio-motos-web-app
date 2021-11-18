export type LogoProps = {
  img: string
  size?: 'small' | 'medium' | 'large'
}

export type ImageProps = {
  src: string
}

export type WrapperProps = Pick<LogoProps, 'size'>
