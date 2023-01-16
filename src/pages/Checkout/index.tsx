import * as css from './styles'
import {
  MapPinLine,
  Trash,
  CurrencyDollar,
  CreditCard,
  DiamondsFour,
  Money,
} from 'phosphor-react'
import CoffeeImg from '../../assets/Coffee.svg'
import { InputCount } from '../../components/InputCount'

export function Checkout() {
  return (
    <css.CheckoutContainer>
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
            <form>
              <css.AddressForm>
                <input
                  type="text"
                  placeholder="CEP"
                  style={{ width: '200px' }}
                />
                <input type="text" placeholder="Rua" />
                <css.FormGroup>
                  <input
                    type="text"
                    placeholder="Número"
                    style={{ width: '200px' }}
                  />
                  <input type="text" placeholder="Complemento " />
                </css.FormGroup>
                <css.FormGroup>
                  <input
                    type="text"
                    placeholder="Bairro"
                    style={{ width: '200px' }}
                  />
                  <input type="text" placeholder="Cidade" />
                  <input
                    type="text"
                    placeholder="UF"
                    style={{ width: '60px' }}
                  />
                </css.FormGroup>
              </css.AddressForm>
            </form>
          </css.Address>
        </css.AddressContainer>
        <css.CartContainer>
          <h4>Cafés selecionados</h4>
          <css.Cart>
            <css.CartList>
              <css.CartItem>
                <css.CartItemInfo>
                  <img src={CoffeeImg} alt="" />
                  <css.CartItemDetails>
                    <p>Expresso Tradicional</p>
                    <css.CartItemActions>
                      <InputCount
                        quantity={1}
                        handleAdd={() => {}}
                        handleRemove={() => {}}
                      />
                      <button>
                        <Trash size={20} color="#8047F8" />
                        REMOVER
                      </button>
                    </css.CartItemActions>
                  </css.CartItemDetails>
                </css.CartItemInfo>
                <p>R$ 9,00</p>
              </css.CartItem>
              <css.CartListDivider />
              <css.CartItem>
                <css.CartItemInfo>
                  <img src={CoffeeImg} alt="" />
                  <css.CartItemDetails>
                    <p>Expresso Tradicional</p>
                    <css.CartItemActions>
                      <InputCount
                        quantity={1}
                        handleAdd={() => {}}
                        handleRemove={() => {}}
                      />
                      <button>
                        <Trash size={20} color="#8047F8" />
                        REMOVER
                      </button>
                    </css.CartItemActions>
                  </css.CartItemDetails>
                </css.CartItemInfo>
                <p>R$ 9,00</p>
              </css.CartItem>
              <css.CartListDivider />
            </css.CartList>

            <css.CartFooter>
              <css.CartFooterTotalPerItem>
                <p>Total de itens</p>
                <p>R$ 29,70</p>
              </css.CartFooterTotalPerItem>
              <css.CartFooterTax>
                <p>Entrega</p>
                <p>R$ 3,50</p>
              </css.CartFooterTax>
              <css.CartFooterTotal>
                <p>Total</p>
                <p>R$ 33.20</p>
              </css.CartFooterTotal>
              <button>CONFIRMAR PEDIDO</button>
            </css.CartFooter>
          </css.Cart>
        </css.CartContainer>
        <css.PaymentContainer>
          <css.PaymentHeader>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </css.PaymentHeader>
          <css.PaymentMethods>
            <button>
              <CreditCard size={22} color="#8047F8" />
              CARTÃO DE CRÉDITO
            </button>

            <button>
              <DiamondsFour size={22} color="#8047F8" />
              PIX
            </button>

            <button>
              <Money size={22} color="#8047F8" />
              DINHEIRO
            </button>
          </css.PaymentMethods>
        </css.PaymentContainer>
      </css.Checkout>
    </css.CheckoutContainer>
  )
}
