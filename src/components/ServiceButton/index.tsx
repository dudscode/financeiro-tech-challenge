import Image from 'next/image'
import { ServiceButtonStyled, ServiceButtonText } from './styles'

interface ServiceButtonProps {
  icon: string
  label: string
}

const ServiceButton = ({ icon, label }: ServiceButtonProps) => {
  return (
    <ServiceButtonStyled variant='outlined'>
      <Image src={icon} alt={label} width={40} height={40} />
      <ServiceButtonText variant='body2'>{label}</ServiceButtonText>
    </ServiceButtonStyled>
  )
}

export default ServiceButton
