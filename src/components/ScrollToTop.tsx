import { CaretUp } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ScrollToTop() {
  const [showButton, setShowButton] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [setShowButton])

  return (
    <motion.button
      animate={
        showButton ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }
      }
      transition={{ duration: 0.15, ease: 'easeInOut' }}
      className='fixed bottom-6 right-6 z-10 rounded-full bg-neutral-900 p-2 text-white'
      onClick={() => {
        window.scrollTo(0, 0)
        history.pushState(null, '', '/')
      }}
    >
      <CaretUp weight='bold' size={24} />
    </motion.button>
  )
}
