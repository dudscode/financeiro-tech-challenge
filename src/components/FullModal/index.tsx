import React, { useState } from 'react'
import { Modal } from '@/components/Modal'
import * as S from './styles'
import theme from '../../../styles/theme'
import I from '@/components/Icons'

type FullModalProps = {
  children: React.ReactNode
  callback?: () => void
  initialState?: boolean
}

const Icon = () => {
  return <I.Close htmlColor={theme.palette.common.black} fontSize='small' />
}

export const FullModal = ({ children, initialState }: FullModalProps) => {
  const zIndex = 10
  const [isOpen, setIsOpen] = useState(initialState)
  const onClose = () => {
    setIsOpen(false)
  }
  return (
    <Modal
      aligne='start'
      height='100vh'
      width='80vw'
      bgColor={theme.palette.secondary.light}
      iconsClose={Icon}
      callback={onClose}
      zIndex={zIndex}
      isOpen={isOpen}
      hasFullBackground
    >
      <S.Container>{children}</S.Container>
    </Modal>
  )
}
