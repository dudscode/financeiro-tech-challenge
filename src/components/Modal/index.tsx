import * as S from './styles'
import I from '@/components/Icons'
import theme from '../../../styles/theme'

interface ContainerProps {
  bgColor?: string,
  closeColor?: string,
  width?: string
  height?: string
  children: React.ReactNode
  isOpen?: boolean
  callback?: (value: boolean) => void
  className?: string
  iconsClose?: React.ElementType
  aligne?: 'start' | 'center' | 'end'
  zIndex?: number
  hasFullBackground?: boolean
}

export const Modal = ({
  children,
  bgColor,
  width,
  height,
  isOpen = true,
  callback,
  iconsClose,
  className,
  aligne = 'center',
  zIndex = 1,
  hasFullBackground = false
}: ContainerProps) => {
  const Icon = iconsClose || I.Close

  if (!isOpen) {
    return null
  }
  return (
    <>
      <S.Container
        aligne={aligne}
        className={className}
        bgColor={bgColor}
        width={width}
        height={height}
        zIndex={zIndex}
      >
        <S.Close onClick={() => callback && callback(false)}>
          <Icon htmlColor={theme.palette.secondary.dark} fontSize='large' />
        </S.Close>
        <S.Content>{children}</S.Content>
      </S.Container>
      {hasFullBackground && <S.Background zIndex={zIndex - 1} onClick={() => callback && callback(false)} />}
    </>
  )
}
