import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const buttonVariants = cva(
  'inline-flex max-w-full items-center justify-center rounded-lg border  px-4 py-2 font-bold transition-colors focus:outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white',
        secondary:
          'border-white text-white hover:bg-white hover:text-neutral-900',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={twMerge(buttonVariants({ className, variant }))}
        ref={ref}
        disabled={props.disabled}
        {...props}
      >
        {props.children}
      </button>
    )
  },
)

Button.displayName = 'Button'
