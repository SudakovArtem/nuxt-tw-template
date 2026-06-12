export type Image = {
  src: string
  srcset?: string
  alt: string
}

export type Props = {
  image: Image
  isLazy?: boolean
}
