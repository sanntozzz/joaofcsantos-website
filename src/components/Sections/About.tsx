import Avatar from '@/assets/Avatar.svg'
import { buttonVariants } from '@/components/Button'
import { Container } from '@/components/Container'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export function About() {
  const t = useTranslations()

  return (
    <Container
      id='aboutme'
      className='flex flex-col items-center gap-6 md:flex-row'
    >
      <div className='space-y-6'>
        <div className='text-5xl font-bold uppercase'>{t('AboutMe.Hi')}</div>
        <div className='text-5xl font-bold uppercase text-blue-500'>
          João Santos
        </div>
        <p className='text-wrap '>{t('AboutMe.Intro')}</p>

        <div className='flex flex-col gap-6 md:flex-row'>
          <Link
            href='mailto:joaofilipecorreia550@gmail.com'
            target='_blank'
            locale={false}
            className={buttonVariants()}
          >
            {t('AboutMe.Contact')}
          </Link>
          <Link
            href='docs/Joao-Santos-Curriculum-Vitae.pdf'
            target='_blank'
            locale={false}
            className={buttonVariants()}
          >
            {t('AboutMe.CV')}
          </Link>
        </div>
      </div>

      <Image
        src={Avatar}
        alt='Creater of João F. C. Santos'
        className='w-full max-w-sm'
        draggable='false'
        priority
      />
    </Container>
  )
}
