'use client'
import { useEffect, useState } from 'react'
import theme from '../../styles/theme'

const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= theme.breakpoints.values.md)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isTablet
}

export default useIsTablet
