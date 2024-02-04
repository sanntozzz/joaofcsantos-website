import { languagesList, socialLinks } from '@/shared/constants'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export function Footer() {
  const t = useTranslations()

  const { locale } = useRouter()

  return (
    <div className='space-y-6 bg-neutral-200 px-6 py-12 text-center text-neutral-500'>
      <div className='space-x-1'>
        {languagesList.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Link
                href='/'
                locale={item.locale}
                className={twMerge(
                  locale === item.locale && 'text-neutral-900',
                  'transition-colors hover:text-neutral-900',
                )}
              >
                {item.label}
              </Link>
              {index !== languagesList.length - 1 && <span>|</span>}
            </React.Fragment>
          )
        })}
      </div>
      <div className='flex items-center justify-center gap-4'>
        {socialLinks.map((item, index) => {
          const Icon = item.icon
          return (
            <Link
              key={index}
              href={item.href}
              target='_blank'
              aria-label={item.text}
            >
              <Icon
                fontSize={24}
                className='transition-colors hover:text-neutral-900'
              />
            </Link>
          )
        })}
      </div>
      <p className='text-sm'>
        João Santos &copy; {new Date().getFullYear()} {t('AllRightsReserved')}
      </p>
    </div>
  )
}
