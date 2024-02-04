import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { educationItems } from '@/shared/constants'
import { IEducationItem } from '@/shared/interfaces'
import { useTranslations } from 'next-intl'

export function Education() {
  const t = useTranslations('Education')

  return (
    <Container id='education'>
      <Header subtitle={t('Subtitle')} title={t('Title')} />
      <div className='grid gap-4 md:grid-cols-3'>
        {educationItems.map((item, index) => {
          return EducationItem(index, item)
        })}
      </div>
    </Container>
  )
}

function EducationItem(index: number, item: IEducationItem) {
  const t = useTranslations('Education.Course')
  return (
    <div key={index} className='space-y-1 rounded-xl bg-neutral-100 p-6'>
      <p>{t(item.course as any)}</p>
      <p className='font-bold'>{item.location}</p>
      <p className='text-neutral-600'>{item.date}</p>
    </div>
  )
}
