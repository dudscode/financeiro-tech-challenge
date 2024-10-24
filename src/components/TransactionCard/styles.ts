import { styled, css } from '@mui/material/styles'
import { Typography, TextField, Box, Grid2 as Grid, Button } from '@mui/material'

export const TransactionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  zIndex: 10,
  width: '100%'
}))

export const TransactionCardHeader = styled(Typography)(({ theme }) => ({
  fontSize: '25px',
  fontWeight: '700',
  textAlign: 'center',
  color: 'var(--color-transaction-text)',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    textAlign: 'left'
  }
}))

export const TransactionAmountLabel = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '600',
  textAlign: 'center',
  color: 'var(--color-transaction-text)',
  marginBottom: '1em',
  [theme.breakpoints.up('sm')]: {
    textAlign: 'left'
  }
}))

export const AmountInput = styled(TextField)(({ theme }) => ({
  Input: {
    textAlign: 'center'
  }
}))

export const SubmitButton = styled(Button)(({ theme }) => ({
  width: '100%',
  textTransform: 'initial'
}))

export const ButtonRow = styled(Grid)(({ theme }) => ({
  marginBottom: '0em',
  [theme.breakpoints.between('sm', 'md')]: {
    marginBottom: '7em'
  }
}))

export const PersonImage = styled('img')(({ theme }) => ({
  zIndex: 2,
  width: '100%',
  marginTop: '2em',
  [theme.breakpoints.up('sm')]: {
    width: '50%',
    position: 'absolute',
    right: '2em',
    bottom: '2em'
  },
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}))
