import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { experienceItems } from '@/shared/constants'
import { IExperienceItem } from '@/shared/interfaces'
import { CaretDown } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export function Experience() {
  const t = useTranslations('Experience')

  return (
    <Container id='experience'>
      <Header subtitle={t('Subtitle')} title={t('Title')} />
      <div className='space-y-4'>
        {experienceItems.map((item, index) => {
          return ExperienceItem(index, item)
        })}
      </div>
    </Container>
  )
}

function ExperienceItem(index: number, item: IExperienceItem) {
  const [isOpen, setIsOpen] = useState<number | null>(null)
  const t = useTranslations('Experience')

  function toogleOpenIndex(index: number) {
    setIsOpen((prevIndex) => (prevIndex === index ? null : index))
  }
  return (
    <div key={index} className='rounded-xl bg-neutral-100 p-6'>
      <div
        className='flex cursor-pointer justify-between'
        onClick={() => toogleOpenIndex(index)}
      >
        <div>
          <p>{t(item.job as any)}</p>
          <p className='font-bold'>{item.location as any}</p>
          <p className='text-neutral-400'>{t(item.date as any)}</p>
        </div>
        <CaretDown
          fontSize={24}
          weight='bold'
          className={twMerge(
            isOpen === index && 'rotate-180',
            'transition-transform',
          )}
        />
      </div>
      <motion.div
        animate={
          isOpen === index
            ? { opacity: 1, height: 'auto', marginTop: '1rem' }
            : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.15, ease: 'easeInOut' }}
        className='overflow-hidden'
      >
        <ul className='ml-6 list-outside'>
          <li className='list-disc'>{t(item.text as any)}</li>
        </ul>
      </motion.div>
    </div>
  )
}
