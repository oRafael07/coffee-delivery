import * as css from './styles'
import {
  MapPinLine,
  Trash,
  CurrencyDollar,
  CreditCard,
  DiamondsFour,
  Money,
} from 'phosphor-react'
import { InputCount } from '../../components/InputCount'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import * as zod from 'zod'
import { useForm, useWatch, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const addressFormValidateSchema = zod.object({
  postalCode: zod.string().min(5).max(9),
  uf: zod.string().min(1).max(2),
  city: zod.string().max(100),
  neighborhood: zod.string().max(100),
  street: zod.string().min(5).max(100),
  houseNumber: zod.string(),
  complement: zod.string().optional(),
})

type AddressFormData = zod.infer<typeof addressFormValidateSchema>

export function Checkout() {
  const {
    coffeeState,
    handleRemoveItemCart,
    handleAddCountItemCart,
    handleRemoveCountItemCart,
  } = useContext(CoffeeContext)

  const addressFormData = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidateSchema),
    defaultValues: {
      city: '',
      complement: '',
      neighborhood: '',
      houseNumber: '',
      postalCode: '',
      street: '',
      uf: '',
    },
  })

  const { handleSubmit, register, control } = addressFormData

  const inputDataWatch = useWatch({ control })

  const { cart } = coffeeState

  function handleSubmitFormData(data: AddressFormData) {
    console.log(data)
  }

  const subTotal = cart
    .reduce((total, item) => total + item.amount * item.quantity, 0)
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
  const taxFrete = 3.5
  const totalCart = cart
    .reduce((total, item) => total + item.amount * item.quantity + taxFrete, 0)
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })

  const hasCompleteOrder =
    inputDataWatch.city === '' ||
    inputDataWatch.houseNumber === '' ||
    inputDataWatch.neighborhood === '' ||
    inputDataWatch.postalCode === '' ||
    inputDataWatch.street === '' ||
    (inputDataWatch.uf === '' && cart.length > 0)

  console.log(cart.length)

  return (
    <css.CheckoutContainer>
      <form onSubmit={handleSubmit(handleSubmitFormData)}>
        <FormProvider {...addressFormData}>
          <css.Checkout>
            <css.AddressContainer>
              <h3>Complete seu pedido</h3>
              <css.Address>
                <css.AddressHeader>
                  <MapPinLine size={22} color="#C47F17" />
                  <div>
                    <h4>Endereço de Entrega</h4>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                  </div>
                </css.AddressHeader>
                <css.AddressForm>
                  <input
                    type="text"
                    placeholder="CEP"
                    style={{ width: '200px' }}
                    {...register('postalCode')}
                  />
                  <input
                    type="text"
                    placeholder="Rua"
                    {...register('street')}
                  />
                  <css.FormGroup>
                    <input
                      type="text"
                      placeholder="Número"
                      style={{ width: '200px' }}
                      {...register('houseNumber')}
                    />
                    <input
                      type="text"
                      placeholder="Complemento"
                      {...register('complement')}
                    />
                  </css.FormGroup>
                  <css.FormGroup>
                    <input
                      type="text"
                      placeholder="Bairro"
                      style={{ width: '200px' }}
                      {...register('neighborhood')}
                    />
                    <input
                      type="text"
                      placeholder="Cidade"
                      {...register('city')}
                    />
                    <input
                      type="text"
                      placeholder="UF"
                      style={{ width: '60px' }}
                      {...register('uf')}
                    />
                  </css.FormGroup>
                </css.AddressForm>
              </css.Address>
            </css.AddressContainer>
            <css.CartContainer>
              <h4>Cafés selecionados</h4>
              <css.Cart>
                <css.CartList>
                  {cart.map((item) => (
                    <>
                      <css.CartItem key={item.id}>
                        <css.CartItemInfo>
                          <img src={item.image} alt="" />
                          <css.CartItemDetails>
                            <p>{item.title}</p>
                            <css.CartItemActions>
                              <InputCount
                                quantity={item.quantity}
                                handleAdd={() =>
                                  handleAddCountItemCart(item.id)
                                }
                                handleRemove={() =>
                                  handleRemoveCountItemCart(item.id)
                                }
                              />
                              <button
                                onClick={() => handleRemoveItemCart(item.id)}
                              >
                                <Trash size={20} color="#8047F8" />
                                REMOVER
                              </button>
                            </css.CartItemActions>
                          </css.CartItemDetails>
                        </css.CartItemInfo>
                        <p>
                          {item.amount.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </p>
                      </css.CartItem>
                      <css.CartListDivider />
                    </>
                  ))}
                </css.CartList>

                <css.CartFooter>
                  <css.CartFooterTotalPerItem>
                    <p>Total de itens</p>
                    <p>{subTotal}</p>
                  </css.CartFooterTotalPerItem>
                  <css.CartFooterTax>
                    <p>Entrega</p>
                    <p>
                      {taxFrete.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </p>
                  </css.CartFooterTax>
                  <css.CartFooterTotal>
                    <p>Total</p>
                    <p>{totalCart}</p>
                  </css.CartFooterTotal>
                  <button disabled={hasCompleteOrder}>CONFIRMAR PEDIDO</button>
                </css.CartFooter>
              </css.Cart>
            </css.CartContainer>
            <css.PaymentContainer>
              <css.PaymentHeader>
                <CurrencyDollar size={22} color="#8047F8" />
                <div>
                  <h4>Pagamento</h4>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </css.PaymentHeader>
              <css.PaymentMethods>
                <button type="button">
                  <CreditCard size={22} color="#8047F8" />
                  CARTÃO DE CRÉDITO
                </button>

                <button type="button">
                  <DiamondsFour size={22} color="#8047F8" />
                  PIX
                </button>

                <button type="button">
                  <Money size={22} color="#8047F8" />
                  DINHEIRO
                </button>
              </css.PaymentMethods>
            </css.PaymentContainer>
          </css.Checkout>
        </FormProvider>
      </form>
    </css.CheckoutContainer>
  )
}
