import logoDark from '@/assets/Logo/Dark.svg'
import logoLight from '@/assets/Logo/Light.svg'
import { SITE_NAME } from '@/components/SEO'
import Image, { ImageProps } from 'next/image'

function Logo(props: { theme?: 'dark' | 'light'; size: ImageProps['height'] }) {
  const { theme = 'dark', size } = props

  return (
    <Image
      src={theme === 'dark' ? logoDark : logoLight}
      alt={SITE_NAME}
      height={size}
      draggable='false'
      priority
    />
  )
}

export { Logo }
