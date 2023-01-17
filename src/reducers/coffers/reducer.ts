import produce from 'immer'
import { ActionTypes } from './actions'

export interface Cart {
  id: number
  title: string
  quantity: number
  image: string
  amount: number
}

export interface Address {
  postalCode: string
  uf: string
  city: string
  neighborhood: string
  street: string
  houseNumber: string
  complement?: string | null
}

export interface CoffeeState {
  cart: Cart[]
  address: Address | null
}

export function CoffeeReducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_CART: {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.newItem.id,
      )

      if (itemIndex < 0) {
        return produce(state, (draft) => {
          draft.cart.push(action.payload.newItem)
        })
      } else {
        return produce(state, (draft) => {
          draft.cart[itemIndex].quantity =
            draft.cart[itemIndex].quantity + action.payload.newItem.quantity
        })
      }
    }
    case ActionTypes.REMOVE_ITEM_CART: {
      const cartWithoutItemSelect = state.cart.filter(
        (item) => item.id !== action.payload.itemId,
      )
      console.log(cartWithoutItemSelect)
      return produce(state, (draft) => {
        draft.cart = cartWithoutItemSelect
      })
    }

    case ActionTypes.ADD_COUNT_ITEM_CART: {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.itemId,
      )

      return produce(state, (draft) => {
        draft.cart[itemIndex].quantity = draft.cart[itemIndex].quantity + 1
      })
    }

    case ActionTypes.REMOVE_COUNT_ITEM_CART: {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.itemId,
      )

      return produce(state, (draft) => {
        if (draft.cart[itemIndex].quantity >= 2) {
          draft.cart[itemIndex].quantity = draft.cart[itemIndex].quantity - 1
        }
      })
    }

    default:
      return state
  }
}
