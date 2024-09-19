'use client'

import { usePathname } from 'next/navigation'
import { List, Item, Link } from './styles'

interface List {
  url: string
  label: string
}

interface MenuProps {
  /**
   * lista de itens a serem exibidos
   */
  list: List[]
  /**
   * cor destaque de seleção
   */
  colorHighlight?: string
  /**
   * sentido do menu
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

export const Menu = ({ list, colorHighlight = '#47A138', isHorizontal = false, className }: MenuProps) => {
  const pathname = usePathname()

  if (!list?.length) {
    return null
  }

  return (
    <List isHorizontal={isHorizontal} className={className}>
      {list?.map((item, index) => {
        const isSelected = getSelected(item, pathname)
        const color = isSelected ? colorHighlight : '#000'
        const weight = isSelected ? '700' : '400'
        return (
          <Item key={index} color={color} isHorizontal={isHorizontal} isSelected={isSelected}>
            <Link color={color} weight={weight} href={item.url} isHorizontal={isHorizontal} isSelected={isSelected}>
              {item?.label}
            </Link>
          </Item>
        )
      })}
    </List>
  )
}
