import useKeyPress from '@/hooks/useKeyPress'
import useWindowSize from '@/hooks/useWindowSize'
import { languagesList, navLinks, socialLinks } from '@/shared/constants'
import { X } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { twMerge } from 'tailwind-merge'

function OffsideMenu(props: {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const t = useTranslations()

  const { isOpen, setIsOpen } = props

  const { width } = useWindowSize()

  if (isOpen && width && width >= 1024) {
    setIsOpen(false)
  }

  if (useKeyPress('Escape')) {
    setIsOpen(false)
  }

  const { locale } = useRouter()

  return (
    <>
      <motion.div
        initial={{ display: 'none' }}
        animate={
          isOpen
            ? { opacity: 1, display: 'block' }
            : { opacity: 0, transitionEnd: { display: 'none' } }
        }
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='fixed inset-0 z-40 bg-neutral-900/75'
        onClick={() => setIsOpen(false)}
      ></motion.div>
      <motion.div
        initial={{ display: 'none' }}
        animate={
          isOpen
            ? { right: 0, display: 'flex' }
            : { right: '-100%', transitionEnd: { display: 'none' } }
        }
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={twMerge(
          'fixed top-0 z-50 flex h-full min-h-dvh w-full max-w-md flex-col  overflow-y-auto bg-neutral-900 p-6 text-neutral-500',
        )}
      >
        <X
          fontSize={24}
          weight='bold'
          className='ml-auto flex-none cursor-pointer transition-colors hover:text-white'
          onClick={() => setIsOpen(false)}
        />
        <div className='flex grow flex-col items-center justify-center p-10'>
          <div className='flex flex-col gap-6'>
            {navLinks.map((item, index) => (
              <div key={index} className='group relative'>
                <Link
                  onClick={() => {
                    setIsOpen(false)
                  }}
                  href={item.href}
                  className='py-1 pl-4 text-xl font-bold transition-all group-hover:text-white'
                >
                  <div className='absolute inset-y-0 left-0 w-0.5 rounded-full bg-white opacity-0 group-hover:opacity-100'></div>
                  {t(item.text as any)}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className='space-y-6 text-center'>
          <div className='space-x-1'>
            {languagesList.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <Link
                    href='/'
                    locale={item.locale}
                    className={twMerge(
                      locale === item.locale && 'text-white',
                      'inline-block hover:text-white',
                    )}
                  >
                    {item.label}
                  </Link>
                  {index !== languagesList.length - 1 && <span>|</span>}
                </React.Fragment>
              )
            })}
          </div>
          <div className='flex justify-center gap-4'>
            {socialLinks.map((item, index) => {
              const Icon = item.icon
              return (
                <Link
                  key={index}
                  href={item.href}
                  target='_blank'
                  aria-label={item.text}
                >
                  <Icon fontSize={24} className='hover:text-white' />
                </Link>
              )
            })}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export { OffsideMenu }
