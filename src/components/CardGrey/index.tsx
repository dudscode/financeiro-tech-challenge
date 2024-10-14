import { ReactNode } from 'react'
import { BottomLeftImage, GreyCardContainer, TopRightImage } from './styles'

interface CardGreyBackgroundProps {
  children: ReactNode
}

const GreyCard: React.FC<CardGreyBackgroundProps> = ({ children }) => {
  return (
    <GreyCardContainer>
      <TopRightImage src='./images/grey-card-edge.svg' alt='' />
      <BottomLeftImage src='./images/grey-card-edge.svg' alt='' />
      {children}
    </GreyCardContainer>
  )
}

export default GreyCard
