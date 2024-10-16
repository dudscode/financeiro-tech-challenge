import { ReactNode } from 'react'
import { BottomLeftImage, GreyCardContainer, TopRightImage } from './styles'

interface CardGreyBackgroundProps {
  children: ReactNode
  cardType?: 'default' | 'alternative'
}

const GreyCard: React.FC<CardGreyBackgroundProps> = ({ children, cardType = 'default' }) => {
  const topRightImageSrc =
    cardType === 'default' ? './images/grey-card-edge.svg' : './images/grey-card-alternate-edge.svg'
  const bottomLeftImageSrc =
    cardType === 'default' ? './images/grey-card-edge.svg' : './images/grey-card-alternate-edge.svg'

  return (
    <GreyCardContainer>
      <TopRightImage src={topRightImageSrc} alt='' />
      <BottomLeftImage src={bottomLeftImageSrc} alt='' />
      {children}
    </GreyCardContainer>
  )
}

export default GreyCard
