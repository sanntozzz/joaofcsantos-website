import { Logo } from '@/components/Logo'
import { OffsideMenu } from '@/components/Sections/Navigation/OffsideMenu'
import useWindowSize from '@/hooks/useWindowSize'
import { languagesList, navLinks } from '@/shared/constants'
import { List } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

function Navigation() {
  const t = useTranslations()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { width } = useWindowSize()

  useEffect(() => {
    if (isOpen && document) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  })

  const { locale } = useRouter()

  return (
    <>
      <div className='mx-auto flex max-w-screen-xl items-center justify-between p-6 text-neutral-500'>
        <Link href='/' className='flex-none'>
          <Logo theme='dark' size={24} />
        </Link>
        {width && width <= 1024 && (
          <List
            fontSize={24}
            weight='bold'
            className='flex-none cursor-pointer transition-colors hover:text-neutral-900'
            onClick={() => setIsOpen(true)}
          />
        )}
        {width && width >= 1024 && (
          <>
            <div className='flex items-center gap-6'>
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className='transition-colors hover:text-neutral-900'
                >
                  {t(item.text as any)}
                </Link>
              ))}
            </div>
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
          </>
        )}
      </div>
      <OffsideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export { Navigation }
