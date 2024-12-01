import { Typography, InputAdornment, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { IFormField } from '@/components/MyAcoount/types'
import * as S from '@/components/MyAcoount/styles'

export const FormField: React.FC<IFormField> = ({ label, value, isEditing, onChange, onEdit }) => {
  return (
    <S.FormField>
      <Typography variant='body1' className='label'>
        {label}
      </Typography>
      <S.Input
        width={label === 'Senha' ? '250px' : '100%'}
        type={label === 'Senha' ? 'password' : 'text'}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        placeholder={label}
        fullWidth
        className={isEditing ? 'editable' : ''}
        InputProps={{
          readOnly: !isEditing,
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={() => onEdit(label)}>
                <EditIcon fontSize='small' />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </S.FormField>
  )
}
