import { Container, Close, Content } from './styles'
import I from '@/components/Icons'
import theme from '../../../styles/theme'

interface ContainerProps {
  bgColor?: string
  width?: string
  height?: string
  children: React.ReactNode
  isOpen?: boolean
  callback?: (value: boolean) => void
  className?: string
}

export const Modal = ({ children, bgColor, width, height, isOpen = true, callback, className }: ContainerProps) => {
  if (!isOpen) {
    return null
  }
  return (
    <Container className={className} bgColor={bgColor} width={width} height={height}>
      <Close onClick={() => callback && callback(false)}>
        <I.Close htmlColor={theme.palette.secondary.dark} fontSize='large' />
      </Close>
      <Content>{children}</Content>
    </Container>
  )
}
