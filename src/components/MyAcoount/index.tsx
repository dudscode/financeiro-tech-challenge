'use client'
import React, { useState, useEffect } from 'react'
import { Typography, InputAdornment, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios'
import * as S from './styles'
import useIsMobile from '@/hooks/useIsMobile'
import useIsTablet from '@/hooks/useIsTablet'

export const MyAccount: React.FC = () => {
  const [user, setUser] = useState<{ id: number; name: string; email: string; password: string }>({
    id: 0,
    name: '',
    email: '',
    password: ''
  })
  const [isEditing, setIsEditing] = useState<{ name: boolean; email: boolean; password: boolean }>({
    name: false,
    email: false,
    password: false
  })

  const isMobile = useIsMobile()
  const isTablet = useIsTablet()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/users')
        const userData = response.data[0]
        setUser(userData)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    fetchUserData()
  }, [])

  const handleSave = async () => {
    try {
      const response = await axios.put('/api/users', user)
      alert('Informações salvas com sucesso!')
      setIsEditing({ name: false, email: false, password: false })
    } catch (error) {
      console.error('Error saving user data:', error)
      alert('Erro ao salvar as informações')
    }
  }

  const handleEditClick = (field: 'name' | 'email' | 'password') => {
    setIsEditing(prevState => ({ ...prevState, [field]: !prevState[field] }))
  }

  const handleChange = (field: 'name' | 'email' | 'password', value: string) => {
    setUser(prevState => ({ ...prevState, [field]: value }))
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
            <Typography variant='body1' className='label'>
              Nome
            </Typography>
            <S.NameEmailInput
              type='text'
              value={user.name}
              onChange={e => handleChange('name', e.target.value)}
              placeholder='Nome'
              fullWidth
              className={isEditing.name ? 'editable' : ''}
              InputProps={{
                readOnly: !isEditing.name,
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={() => handleEditClick('name')}>
                      <EditIcon fontSize='small' />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </S.FormField>
          <S.FormField>
            <Typography variant='body1' className='label'>
              Email
            </Typography>
            <S.NameEmailInput
              type='email'
              value={user.email}
              onChange={e => handleChange('email', e.target.value)}
              placeholder='Email'
              fullWidth
              className={isEditing.email ? 'editable' : ''}
              InputProps={{
                readOnly: !isEditing.email,
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={() => handleEditClick('email')}>
                      <EditIcon fontSize='small' />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </S.FormField>
          <S.FormField>
            <Typography variant='body1' className='label'>
              Senha
            </Typography>
            <S.PasswordInput
              type='password'
              value={user.password}
              onChange={e => handleChange('password', e.target.value)}
              placeholder='Senha'
              fullWidth
              className={isEditing.password ? 'editable' : ''}
              InputProps={{
                readOnly: !isEditing.password,
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={() => handleEditClick('password')}>
                      <EditIcon fontSize='small' />
                    </IconButton>
                  </InputAdornment>
                )
              }}
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
