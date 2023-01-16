import * as css from './styles'
import CoffeeImg from '../../assets/Coffee.svg'
import { ShoppingCartSimple } from 'phosphor-react'
import { InputCount } from '../InputCount'
import { useState } from 'react'

export function CoffeeCard() {
  const [quantity, setQuantity] = useState(1)

  function handleAdd() {
    setQuantity((state) => state + 1)
  }

  function handleRemove() {
    if (quantity === 1) return

    setQuantity((state) => state - 1)
  }

  return (
    <css.CoffeeCardContainer>
      <css.CoffeeCardImageContainer>
        <img src={CoffeeImg} alt="" />
      </css.CoffeeCardImageContainer>
      <css.CoffeeTagsContainer>
        <css.CoffeeCardTag>TRADICIONAL</css.CoffeeCardTag>
        <css.CoffeeCardTag>GELADO</css.CoffeeCardTag>
        <css.CoffeeCardTag>VODKA</css.CoffeeCardTag>
      </css.CoffeeTagsContainer>
      <h1>Expresso Tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <css.CoffeeCardFooter>
        <p>
          R$ <b> 9,90</b>
        </p>
        <css.CoffeeCardFooterActions>
          <InputCount
            quantity={quantity}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          />
          <button type="submit">
            <ShoppingCartSimple size={22} fill="#fff" color="#fff" />
          </button>
        </css.CoffeeCardFooterActions>
      </css.CoffeeCardFooter>
    </css.CoffeeCardContainer>
  )
}
