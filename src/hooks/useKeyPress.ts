import { useEffect, useState } from 'react'

const useKeyPress = (targetKey: string): boolean => {
  const [keyPressed, setKeyPressed] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        setKeyPressed(true)
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        setKeyPressed(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [targetKey])

  return keyPressed
}

export default useKeyPress
