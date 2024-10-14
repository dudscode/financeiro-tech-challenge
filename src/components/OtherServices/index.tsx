'use client'
import React from 'react'
import { Grid } from '@mui/material'
import { ServiceContainer, ServiceGrid, ServiceTitle } from './styles'
import ServiceButton from '../ServiceButton'

const services = [
  { title: 'Empréstimo', icon: '/icons/icon-loan.svg' },
  { title: 'Meus cartões', icon: '/icons/icon-card.svg' },
  { title: 'Doações', icon: '/icons/icon-donation.svg' },
  { title: 'Pix', icon: '/icons/icon-pix.svg' },
  { title: 'Seguros', icon: '/icons/icon-insurance.svg' },
  { title: 'Crédito celular', icon: '/icons/icon-cellphone.svg' }
]

const OtherServiceGrid = () => {
  return (
    <ServiceContainer>
      <ServiceTitle variant='h6' gutterBottom>
        Confira os serviços disponíveis
      </ServiceTitle>

      <ServiceGrid container spacing={3} direction='row'>
        {services.map((service, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <ServiceButton icon={service.icon} label={service.title}></ServiceButton>
          </Grid>
        ))}
      </ServiceGrid>
    </ServiceContainer>
  )
}

export default OtherServiceGrid
