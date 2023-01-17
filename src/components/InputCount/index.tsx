import { useState } from 'react'
import * as css from './styles'
import { Plus, Minus } from 'phosphor-react'

interface InputCountProps {
  quantity: number
  handleRemove: () => void
  handleAdd: () => void
}

export function InputCount({
  quantity,
  handleAdd,
  handleRemove,
}: InputCountProps) {
  return (
    <css.InputCountContainer>
      <button type="button" onClick={handleRemove}>
        <Minus size={10} color="#8047F8" />
      </button>
      <input type="number" value={quantity} min={1} />
      <button type="button" onClick={handleAdd}>
        <Plus size={10} color="#8047F8" />
      </button>
    </css.InputCountContainer>
  )
}
