import React, { useEffect, useRef, useState } from 'react'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Dialog from '@mui/material/Dialog'

export interface ConfirmationDialogRawProps {
  id: string
  value: string
  open: boolean
  onClose: (value?: string) => void
  children: React.ReactNode
  mode: 'edit' | 'delete'
  title?: string
}

export const DialogModal = (props: ConfirmationDialogRawProps) => {
  const { onClose, value: valueProp, open, mode, title, ...other } = props
  const [value, setValue] = useState(valueProp)
  const radioGroupRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) {
      setValue(valueProp)
    }
  }, [valueProp, open])

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus()
    }
  }

  const handleCancel = () => {
    onClose()
  }

  const handleOk = () => {
    onClose(value)
  }

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth='xs'
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogTitle>{title || (mode === 'edit' ? 'Editar Extrato' : 'Excluir item')}</DialogTitle>
      <DialogContent dividers>{props.children}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancelar
        </Button>
        <Button onClick={handleOk}>{mode === 'edit' ? 'Salvar' : 'Ok'}</Button>
      </DialogActions>
    </Dialog>
  )
}
