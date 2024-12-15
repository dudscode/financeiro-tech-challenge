'use client'
import { lazy } from 'react'
const BulletinApp = lazy(() => import('bulletin/App'))

import { Typography, CardMedia, Grid2 as Grid } from '@mui/material'
import * as S from './styles'

import BaseHome from '@/templates/BaseHome'
import useIsMobile from '@/hooks/useIsMobile'

import { MyContext } from '@/templates/BaseHome'

export default function Home() {
  const isMobile = useIsMobile()

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
      <BulletinApp />
      <BaseHome>
        <MyContext.Consumer>
          {({ login, create }) => {
            return (
              <>
                <Grid container spacing={2} alignItems='center'>
                  <Grid size={{ xs: 10, md: 5 }} offset={{ xs: 1, md: 0 }}>
                    <S.Title>
                      Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!
                    </S.Title>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }} offset={{ md: 1 }}>
                    <S.BannerImage src='./images/banner-home.png' alt='Banner Bytebank' />
                  </Grid>
                </Grid>
                {isMobile && (
                  <S.Buttons>
                    <S.ButtonUI
                      variant='contained'
                      color='success'
                      size='small'
                      onClick={() => create.setOpenCreate(true, 'login')}
                    >
                      Abrir conta
                    </S.ButtonUI>
                    <S.ButtonUI
                      variant='outlined'
                      color='warning'
                      size='large'
                      onClick={() => login.setOpenLogin(true, 'login')}
                    >
                      Já tenho conta
                    </S.ButtonUI>
                  </S.Buttons>
                )}
                <S.CenteredHeading>Vantagens do nosso banco:</S.CenteredHeading>
                <Grid container spacing={5} sx={{ marginBottom: '2em' }}>
                  {benefits.map((benefit, index) => (
                    <Grid
                      size={{ xs: 10, sm: 4, md: 3 }}
                      offset={{ xs: 1, sm: index % 2 === 0 ? 1 : 2, md: 0 }}
                      key={benefit.title}
                    >
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
                        <S.CardTitle color='textSecondary'>{benefit.title}</S.CardTitle>
                        <Typography variant='body2' color='#767676' sx={{ textAlign: 'center' }}>
                          {benefit.description}
                        </Typography>
                      </S.Card>
                    </Grid>
                  ))}
                </Grid>
              </>
            )
          }}
        </MyContext.Consumer>
      </BaseHome>
    </S.Container>
  )
}
