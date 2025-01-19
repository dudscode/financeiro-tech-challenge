import React, { useState } from 'react'
import * as S from '@/components/Extrato/styles'
import CircularProgress from '@mui/material/CircularProgress'
import { useExtrato } from '@/hooks/useExtrato'
import { IExtratoProps } from '@/components/Extrato/types'
import { formatCurrency } from '@/components/Extrato/utils'
import { Modal } from '@/components/Extrato/components/Modal'
import { ButtonEdit, ButtonDelete } from '@/components/Extrato/components/Buttons'
import { useTransaction } from '@/hooks/useTransaction'
import FilterListIcon from '@mui/icons-material/FilterList'
import CloseIcon from '@mui/icons-material/Close'



export const Extrato = ({ title = 'Extrato' }: IExtratoProps) => {
  const { getExtrato, page } = useTransaction()
  const { extrato, loading, fetchData, openModal, onEdit, onDelete, item, setItem } = useExtrato()
  const hasExtrato = !!extrato && extrato.length

  const handlePageChange = (newPage: number) => {
    if (newPage > 0) {
      getExtrato(newPage)
    }
  }

  const [searchTerm, setSearchTerm] = useState('')
  const [filterMonth, setFilterMonth] = useState('')
  const [tempFilterMonth, setTempFilterMonth] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const filteredExtrato = extrato.filter((item: { mes: string; tipo: string }) => {
    const matchesSearch = (item.tipo || '').toLowerCase().includes((searchTerm || '').toLowerCase())
    const matchesMonth = filterMonth ? item.mes === filterMonth : true
    return matchesSearch && matchesMonth
  })

  const handleConfirmFilter = () => {
    setFilterMonth(tempFilterMonth)
    setIsMenuOpen(false)
  }

  return (
    <>
      <Modal item={item} type={openModal.type} setItem={setItem} openModal={openModal.status} fetchData={fetchData} />
      <S.Container>
        <S.Title variant="h2">{title}</S.Title>

        <S.Filters>
          <S.SearchInput
            type="text"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <S.IconWrapper onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FilterListIcon />
          </S.IconWrapper>

          {isMenuOpen && (
            <S.MenuWrapper>
              <S.FilterHeader>
                <S.FilterTitle>Filtrar por mês</S.FilterTitle>
                <S.CloseButton onClick={() => setIsMenuOpen(false)}>
                  <CloseIcon />
                </S.CloseButton>
              </S.FilterHeader>
              <S.FilterSelect
                value={tempFilterMonth}
                onChange={(e) => setTempFilterMonth(e.target.value)}
              >
                <option value="">Todos os meses</option>
                <option value="Janeiro">Janeiro</option>
                <option value="Fevereiro">Fevereiro</option>
                <option value="Março">Março</option>
                <option value="Abril">Abril</option>
                <option value="Maio">Maio</option>
                <option value="Junho">Junho</option>
                <option value="Julho">Julho</option>
                <option value="Agosto">Agosto</option>
                <option value="Setembro">Setembro</option>
                <option value="Outubro">Outubro</option>
                <option value="Novembro">Novembro</option>
                <option value="Dezembro">Dezembro</option>
              </S.FilterSelect>
              <S.FilterActions>
                <S.ConfirmButton onClick={handleConfirmFilter}>Confirmar</S.ConfirmButton>
              </S.FilterActions>
            </S.MenuWrapper>
          )}
        </S.Filters>

        {loading && <CircularProgress />}
        {!loading && hasExtrato && (
          <S.List>
            {filteredExtrato.length > 0 ? (
              [...filteredExtrato].reverse().map((item, index) => (
                <S.Item key={index}>
                  <S.TextContainer>
                    <S.TextHighlight>{item.mes}</S.TextHighlight>
                    <S.ButtonContainer>
                      <ButtonEdit item={item} hasExtrato={hasExtrato} onEdit={onEdit} />
                      <ButtonDelete item={item} hasExtrato={hasExtrato} onDelete={onDelete} />
                    </S.ButtonContainer>
                  </S.TextContainer>
                  <S.TextContainer>
                    <S.Paragraph txt="16px">{item.tipo}</S.Paragraph>
                    <S.Paragraph txt="13px" type="info">
                      {item.data}
                    </S.Paragraph>
                  </S.TextContainer>
                  <S.Paragraph>{formatCurrency(item.valor)}</S.Paragraph>
                  <S.Divider variant="fullWidth" />
                </S.Item>
              ))
            ) : (
              <S.Paragraph txt="16px">Não há registros desse mês</S.Paragraph>
            )}
          </S.List>
        )}
        {!loading && !hasExtrato && <S.Paragraph txt='16px'>Não existe nenhum extrato</S.Paragraph>}

        <S.PaginationContainer>
          <S.PaginationButton onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
            Anterior
          </S.PaginationButton>
          <S.PageIndicator>{page}</S.PageIndicator>
          <S.PaginationButton onClick={() => handlePageChange(page + 1)}>Próxima</S.PaginationButton>
        </S.PaginationContainer>
      </S.Container>
    </>
  )
}
