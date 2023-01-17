import * as css from './styles'
import CoffeeImg from '../../assets/Coffee.svg'
import { ShoppingCartSimple } from 'phosphor-react'
import { InputCount } from '../InputCount'
import { useContext, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { Cart } from '../../reducers/coffers/reducer'

interface CoffeeCardProps {
  id: number
  title: string
  description: string
  tags: string[]
  amount: number
  image: string
}

export function CoffeeCard({
  id,
  title,
  description,
  tags,
  amount,
  image,
}: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  const { handleAddItemCart } = useContext(CoffeeContext)

  function handleAdd() {
    setQuantity((state) => state + 1)
  }

  function handleRemove() {
    if (quantity === 1) return

    setQuantity((state) => state - 1)
  }

  function handleAddItemOnCart() {
    const newItem: Cart = {
      id,
      title,
      quantity,
      image,
      amount,
    }

    handleAddItemCart(newItem)
    setQuantity(1)
  }

  return (
    <css.CoffeeCardContainer>
      <css.CoffeeCardImageContainer>
        <img src={image} alt="" />
      </css.CoffeeCardImageContainer>
      <css.CoffeeTagsContainer>
        {tags.map((tag, key) => (
          <css.CoffeeCardTag key={key}>{tag}</css.CoffeeCardTag>
        ))}
      </css.CoffeeTagsContainer>
      <h1>{title}</h1>
      <p>{(description = '')}</p>
      <css.CoffeeCardFooter>
        <p>
          R$ <b> {amount}</b>
        </p>
        <css.CoffeeCardFooterActions>
          <InputCount
            quantity={quantity}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          />
          <button type="button" onClick={handleAddItemOnCart}>
            <ShoppingCartSimple size={22} fill="#fff" color="#fff" />
          </button>
        </css.CoffeeCardFooterActions>
      </css.CoffeeCardFooter>
    </css.CoffeeCardContainer>
  )
}
