import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { skillsItems } from '@/shared/constants'
import { ISkillsItem } from '@/shared/interfaces'
import { useTranslations } from 'next-intl'

export function Skills() {
  const t = useTranslations('Skills')
  return (
    <Container id='skills'>
      <Header subtitle={t('Subtitle')} title={t('Title')} />
      <div className='grid gap-4 md:grid-cols-3'>
        {skillsItems.map((item, index) => {
          return SkillsItem(index, item)
        })}
      </div>
    </Container>
  )
}

function SkillsItem(index: number, item: ISkillsItem) {
  const t = useTranslations('Skills.Items')

  return (
    <div
      key={index}
      className='space-y-2 rounded-lg bg-neutral-100 p-6 text-neutral-900'
    >
      <div className='inline-block rounded bg-neutral-900 px-2 py-1 font-bold text-white'>
        {t(item.label as any)}
      </div>
      <p>{t(item.text as any)}</p>
      <div>
        {item.list.map((item, index) => {
          return (
            <ul key={index} className='ml-6 list-outside'>
              <li className='list-disc'>{item}</li>
            </ul>
          )
        })}
      </div>
    </div>
  )
}
