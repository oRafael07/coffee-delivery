import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { Cart, CoffeeReducer, CoffeeState } from '../reducers/coffers/reducer'
import {
  AddCountItemCartAction,
  AddItemCartAction,
  RemoveCountItemCartAction,
  RemoveItemCartAction,
} from '../reducers/coffers/actions'

interface CoffeeContextProps {
  coffeeState: CoffeeState
  handleAddItemCart: (item: Cart) => void
  handleAddCountItemCart: (itemId: number) => void
  handleRemoveCountItemCart: (itemId: number) => void
  handleRemoveItemCart: (itemId: number) => void
}

export const CoffeeContext = createContext({} as CoffeeContextProps)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeState, dispatch] = useReducer(
    CoffeeReducer,
    {
      cart: [],
      address: null,
    },
    () => {
      const storedStateJson = localStorage.getItem(
        '@coffee-delivery:coffee-state-1.0.0',
      )

      if (storedStateJson) return JSON.parse(storedStateJson)

      return {
        cart: [],
        address: null,
      }
    },
  )

  useEffect(() => {
    const stateJson = JSON.stringify(coffeeState)

    localStorage.setItem('@coffee-delivery:coffee-state-1.0.0', stateJson)
  }, [coffeeState])

  function handleAddItemCart(item: Cart) {
    dispatch(AddItemCartAction(item))
  }

  function handleRemoveItemCart(itemId: number) {
    dispatch(RemoveItemCartAction(itemId))
  }

  function handleAddCountItemCart(itemId: number) {
    dispatch(AddCountItemCartAction(itemId))
  }

  function handleRemoveCountItemCart(itemId: number) {
    dispatch(RemoveCountItemCartAction(itemId))
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffeeState,
        handleAddItemCart,
        handleRemoveItemCart,
        handleAddCountItemCart,
        handleRemoveCountItemCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
