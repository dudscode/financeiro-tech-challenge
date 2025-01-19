import React from 'react'
import { Grid2 as Grid } from '@mui/material'
import { ServiceContainer, ServiceGrid, ServiceTitle } from './styles'
import ServiceButton from '../ServiceButton'
import GreyCard from '../CardGrey'

const services = [
  { title: 'Empréstimo', icon: '/icons/icon-loan.svg' },
  { title: 'Meus cartões', icon: '/icons/icon-card.svg' },
  { title: 'Doações', icon: '/icons/icon-donation.svg' },
  { title: 'Pix', icon: '/icons/icon-pix.svg' },
  { title: 'Seguros', icon: '/icons/icon-insurance.svg' },
  { title: 'Crédito celular', icon: '/icons/icon-cellphone.svg' }
]

const OtherServices = () => {
  return (
    <GreyCard>
      <ServiceContainer>
        <ServiceTitle variant='h6' gutterBottom>
          Confira os serviços disponíveis
        </ServiceTitle>

        <ServiceGrid container spacing={3} direction='row'>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, md: 5 }} key={index}>
              <ServiceButton icon={service.icon} label={service.title}></ServiceButton>
            </Grid>
          ))}
        </ServiceGrid>
      </ServiceContainer>
    </GreyCard>
  )
}

export default OtherServices
