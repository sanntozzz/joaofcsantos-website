import { buttonVariants } from '@/components/Button'
import SEO from '@/components/SEO'
import { GetStaticPropsContext } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Custom404() {
  const t = useTranslations()
  return (
    <>
      <SEO title='404 Not Found' />
      <div className='flex min-h-screen items-center justify-center bg-neutral-900 text-white'>
        <div className='max-w-screen-sm space-y-6 p-6 text-center'>
          <p className='text-9xl font-bold text-neutral-500'>404</p>
          <div className='space-y-2'>
            <p className='mt-4 text-xl font-bold'>{t('PageNotFound.Title')}</p>
            <p>{t('PageNotFound.Text')}</p>
          </div>
          <Link href='/' className={buttonVariants({ variant: 'secondary' })}>
            {t('PageNotFound.Button')}
          </Link>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  }
}
