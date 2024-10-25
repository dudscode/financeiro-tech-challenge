'use client'
import { Typography, Grid, CardContent, CardMedia } from '@mui/material'
import * as S from './styles'

import BaseHome from '@/templates/BaseHome'

export default function Home() {
  const benefits = [
    {
      title: 'Conta e cartão gratuitos',
      description: 'Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.',
      image: 'images/icone-presente.png'
    },
    {
      title: 'Saques sem custo',
      description: 'Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.',
      image: 'images/icone-saque.png'
    },
    {
      title: 'Programa de pontos',
      description: 'Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!',
      image: 'images/icone-pontos.png'
    },
    {
      title: 'Seguro Dispositivos',
      description: 'Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.',
      image: 'images/icone-dispositivos.png'
    }
  ]

  return (
    <S.Container>
      <BaseHome>
        <Grid container spacing={4} alignItems='center'>
          <Grid item xs={12} md={6}>
            <S.Title>
              Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!
            </S.Title>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src='images/banner-home.png' />
          </Grid>
        </Grid>
        <S.Typography>Vantagens do nosso banco:</S.Typography>
        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <S.Card>
                <CardMedia
                  className='CardMedia'
                  component='img'
                  alt={benefit.title}
                  image={benefit.image}
                  sx={{
                    width: '73px',
                    height: '56px',
                    display: 'block',
                    margin: '0 auto'
                  }}
                />
                <CardContent>
                  <Typography color='textSecondary' gutterBottom sx={{ fontWeight: 'bold' }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant='body2' color='textDisabled'>
                    {benefit.description}
                  </Typography>
                </CardContent>
              </S.Card>
            </Grid>
          ))}
        </Grid>
      </BaseHome>
    </S.Container>
  )
}
