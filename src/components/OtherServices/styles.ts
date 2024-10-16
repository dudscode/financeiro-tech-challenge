import { styled } from '@mui/material/styles'
import { Button, Typography, Grid, Box } from '@mui/material'

export const ServiceContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  zIndex: 10
}))

export const ServiceTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '25px'
}))

export const ServiceGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'space-evenly',
  alignItems: 'stretch',
  marginTop: theme.spacing(1)
}))
