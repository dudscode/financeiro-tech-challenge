import { Container, Close, Content } from './styles'
import { Icon } from '@/components/Icons'

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
        <Icon icon='close' alt='botão de fechar a modal' width='20px' height='20px' />
      </Close>
      <Content>{children}</Content>
    </Container>
  )
}
