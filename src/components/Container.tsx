import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Container({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge(
        'mx-auto max-w-screen-xl space-y-6 px-6 py-12',
        className,
      )}
      {...props}
    >
      {props.children}
    </div>
  )
}
