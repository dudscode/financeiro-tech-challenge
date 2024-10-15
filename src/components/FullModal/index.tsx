import React, { useState, useEffect } from 'react'
import * as S from './styles'
import theme from '../../../styles/theme'
import I from '@/components/Icons'
import useIsTablet from '@/hooks/useIsTablet'
import useIsMobile from '@/hooks/useIsMobile'

type FullModalProps = {
  children: React.ReactNode
  callback?: () => void
  initialState?: boolean
}

const Icon = () => {
  return <I.Close htmlColor={theme.palette.common.black} fontSize='small' />
}

export const FullModal = ({ children, initialState }: FullModalProps) => {
  const [isOpen, setIsOpen] = useState(initialState)

  const isTablet = useIsTablet()
  const isMobile = useIsMobile()

  const width = isMobile ? '90vw' : isTablet ? '80vw' : '792px'

  const zIndex = 10

  useEffect(() => {
    if (initialState) {
      setIsOpen(true)
    }
  }, [initialState])

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <S.Modal
      aligne='start'
      height='100vh'
      width={width}
      bgColor={theme.palette.secondary.light}
      iconsClose={Icon}
      callback={onClose}
      zIndex={zIndex}
      isOpen={isOpen}
      hasFullBackground
    >
      <S.Container>{children}</S.Container>
    </S.Modal>
  )
}
