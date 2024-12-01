import React from 'react'
import { Typography, CircularProgress } from '@mui/material'
import useIsMobile from '@/hooks/useIsMobile'
import useIsTablet from '@/hooks/useIsTablet'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useUser } from '@/hooks/useUser'
import * as S from '@/components/MyAcoount/styles'
import { FormField } from '@/components/MyAcoount/components/FormField'

export const MyAccount: React.FC = () => {
  const { user, isEditing, handleEditClick, handleChange, handleSave } = useUser()

  const isMobile = useIsMobile()
  const isTablet = useIsTablet()

  if (!user) {
    return (
      <S.LoadingContainer>
        <CircularProgress />
      </S.LoadingContainer>
    )
  }

  return (
    <S.Container>
      <S.Header>
        <Typography variant='h2'>Minha Conta</Typography>
      </S.Header>
      <S.Content>
        {!(isMobile || isTablet) && <S.ProfileImage src='/images/person-my-account.svg' alt='Profile' />}
        <S.FormContainer>
          <S.FormField>
            <FormField
              label='Nome'
              value={user.name}
              isEditing={isEditing.name}
              onChange={value => handleChange('name', value)}
              onEdit={() => handleEditClick('name')}
            />
            <FormField
              label='Email'
              value={user.email}
              isEditing={isEditing.email}
              onChange={value => handleChange('email', value)}
              onEdit={() => handleEditClick('email')}
            />
          </S.FormField>
          <S.FormField>
            <FormField
              label='Senha'
              value={user.password}
              isEditing={isEditing.password}
              onChange={value => handleChange('password', value)}
              onEdit={() => handleEditClick('password')}
            />
          </S.FormField>
          <S.StyledButton variant='contained' onClick={handleSave}>
            Salvar
          </S.StyledButton>
        </S.FormContainer>
        {(isMobile || isTablet) && <S.ProfileImage src='/images/person-my-account.svg' alt='Profile' />}
      </S.Content>
      <>
        <S.BottomEdge src='/images/bottom-my-account.png' alt='Bottom Edge' />
        <S.TopEdge src='/images/top-my-account.png' alt='Top Edge' />
      </>
    </S.Container>
  )
}
