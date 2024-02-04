import { IHeaderProps } from '@/shared/interfaces'
import { twMerge } from 'tailwind-merge'

export function Header({ title, subtitle }: IHeaderProps) {
  return (
    <div className='space-y-2'>
      <p className={twMerge('text-xl text-neutral-500')}>{subtitle}</p>
      <p className={twMerge('text-2xl font-bold text-neutral-900')}>{title}</p>
    </div>
  )
}
