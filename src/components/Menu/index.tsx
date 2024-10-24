'use client'

import { usePathname } from 'next/navigation'
import * as S from './styles'

interface List {
  url?: string
  label: string
  click?: () => void
}

interface MenuProps {
  /**
   * lista de itens a serem exibidos
   */
  list: List[]
  /**
   * se o menu é horizontal
   */
  isHorizontal?: boolean
  /**
   * classe css
   */
  className?: string
}

const getSelected = (item: List, selected: string) => {
  return item.url === selected
}

export const Menu = ({ list, isHorizontal, className }: MenuProps) => {
  const pathname = usePathname()

  if (!list?.length) {
    return null
  }

  return (
    <S.List className={className} isHorizontal={isHorizontal}>
      {list?.map((item, index) => {
        const isSelected = getSelected(item, pathname)
        const hasClick = item?.click
        return (
          <S.Item key={index} isSelected={isSelected} isHorizontal={isHorizontal}>
            {!hasClick && (
              <S.Link href={item.url} isSelected={isSelected}>
                {item?.label}
              </S.Link>
            )}
            {hasClick && (
              <S.Link onClick={item.click} isSelected={isSelected}>
                {item?.label}
              </S.Link>
            )}
          </S.Item>
        )
      })}
    </S.List>
  )
}
