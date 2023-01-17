import { ICoffee } from '../../pages/Home'
import { Cart } from './reducer'

export enum ActionTypes {
  ADD_ITEM_CART = 'ADD_ITEM_CART',
  REMOVE_ITEM_CART = 'REMOVE_ITEM_CART',
  ADD_COUNT_ITEM_CART = 'ADD_COUNT_ITEM_CART',
  REMOVE_COUNT_ITEM_CART = 'REMOVE_COUNT_ITEM_CART',
}

export function AddItemCartAction(newItem: Cart) {
  return {
    type: ActionTypes.ADD_ITEM_CART,
    payload: {
      newItem,
    },
  }
}

export function RemoveItemCartAction(itemId: number) {
  return {
    type: ActionTypes.REMOVE_ITEM_CART,
    payload: {
      itemId,
    },
  }
}

export function AddCountItemCartAction(itemId: number) {
  return {
    type: ActionTypes.ADD_COUNT_ITEM_CART,
    payload: {
      itemId,
    },
  }
}

export function RemoveCountItemCartAction(itemId: number) {
  return {
    type: ActionTypes.REMOVE_COUNT_ITEM_CART,
    payload: {
      itemId,
    },
  }
}
