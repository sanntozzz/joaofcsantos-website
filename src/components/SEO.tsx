import { ISEOProps } from '@/shared/interfaces'
import Head from 'next/head'

export const SITE_NAME = 'João Santos Developer'

const baseUrl =
  process.env.NODE_ENV === 'production' ? 'joaofcsantos.com' : 'localhost:3000'

function SEO({
  title,
  description = 'Passionate for front-end development and proud technology nerd staying up-to-date with the evolving tech landscape.',
  url = baseUrl,
  type = 'website',
  image = '/images/Open-Graph-Image.jpg',
}: ISEOProps) {
  const pageTitle = title ? [title, SITE_NAME].join(' | ') : SITE_NAME
  const OGImage = baseUrl + image
  const metaTags = [
    { name: 'description', content: description },
    { property: 'og:type', content: type },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: description },
    { property: 'og:site_name', content: pageTitle },
    { property: 'og:url', content: url },
    { property: 'og:image', content: OGImage },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:url', content: url },
    { name: 'twitter:image', content: OGImage },
  ].filter(Boolean)

  return (
    <Head>
      <title>{pageTitle}</title>
      {metaTags.map(({ name, property, content }) => (
        <meta
          key={name || property}
          name={name}
          property={property}
          content={content}
        />
      ))}
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='icon' type='image/png' href='/favicon.ico' />
      <link rel='manifest' href='/site.webmanifest' />
    </Head>
  )
}

export default SEO
