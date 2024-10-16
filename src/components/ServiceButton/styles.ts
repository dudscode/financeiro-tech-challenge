import { Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ServiceButtonStyled = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(3),
  flexDirection: 'column',
  textAlign: 'center',
  fontWeight: 700,
  fontSize: 16,
  borderColor: 'transparent',
  backgroundColor: '#F2F2F2',
  borderRadius: '8px',
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'center',
  height: '150px',
  '&:hover': {
    backgroundColor: '#E8F5E9'
  }
}))

export const ServiceButtonText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: 16,
  color: '#000',
  textTransform: 'initial',
  fontWeight: 700
}))
