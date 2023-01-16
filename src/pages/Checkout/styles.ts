import styled from 'styled-components'
import media from 'styled-media-query'

export const CheckoutContainer = styled.div`
  width: 100%;
  margin-top: 4rem;

  h3 {
    color: #403937;
  }
`

export const Checkout = styled.div`
  display: grid;
  grid-template-areas:
    'address cart'
    'payment cart';
  gap: 10px 30px;
  margin-top: 1rem;

  ${media.lessThan('large')`
    grid-template-areas: 
      'cart'
      'address'
      'payment';
  `}
`

export const AddressContainer = styled.div`
  grid-area: address;
`

export const Address = styled.div`
  background: #f3f2f2;
  padding: 2rem;
  border-radius: 6px;
  margin-top: 1rem;
`

export const AddressHeader = styled.div`
  display: flex;
  gap: 10px;

  div h4 {
    font-size: 16px;
    font-weight: 400;
    color: #403937;
  }

  div p {
    font-size: 14px;
    color: #574f4d;
  }
`

export const AddressForm = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    padding: 10px;
    background: #ededed;
    border-radius: 4px;
    border: 1px solid #e6e5e5;
    font-size: 14px;
    font-weight: 500;
    color: #8d8686;

    ${media.lessThan('medium')`
      width: 100% !important;
    `}
  }
`

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;

  ${media.lessThan('medium')`
    flex-direction: column;
    width: 100%
  `}

  input {
    width: 100%;
  }
`

export const CartContainer = styled.div`
  grid-area: cart;
`

export const Cart = styled.div`
  background: #f3f2f2;
  padding: 40px;
  border-radius: 6px;
  margin-top: 1rem;
  grid-area: cart;

  ${media.lessThan('medium')`
    padding: 40px 20px;
  `}
`

export const CartList = styled.div``

export const CartListDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #e6e5e5;
  margin: 24px 0;
`

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 16px;
    font-weight: bold;
    color: #574f4d;
  }
`

export const CartItemInfo = styled.div`
  display: flex;
  gap: 20px;

  img {
    width: 64px;
    height: 64px;
  }
`

export const CartItemDetails = styled.div`
  p {
    font-size: 16px;
    font-weight: 400;
  }
`

export const CartItemActions = styled.div`
  display: flex;
  gap: 10px;

  button {
    display: flex;
    align-items: center;
    border: 0;
    background: #e6e5e5;
    color: #574f4d;
    border-radius: 6px;
    padding: 0 10px;
    cursor: pointer;

    ${media.lessThan('large')`
      font-size: .8em;
    `}
  }
`

export const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    wdith: 100%;
    background: #dbac2c;
    color: #ffff;
    border: 0;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
`

export const CartFooterTotalPerItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CartFooterTax = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CartFooterTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  p {
    font-weight: bold;
    font-size: 20px;
    color: #403937;
  }
`

export const PaymentContainer = styled.div`
  background: #f3f2f2;
  padding: 2rem;
  border-radius: 6px;
  grid-area: payment;
`

export const PaymentHeader = styled.div`
  display: flex;
  gap: 10px;

  div h4 {
    font-size: 16px;
    font-weight: 400;
    color: #403937;
  }

  div p {
    font-size: 14px;
    color: #574f4d;
  }
`

export const PaymentMethods = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-top: 1rem;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}

  button {
    border: 0;
    background: #e6e5e5;
    color: #574f4d;
    padding: 16px;
    border-radius: 6px;
    font-size: 14px;

    display: flex;
    align-items: center;

    cursor: pointer;

    svg {
      margin-right: 10px;
    }
  }
`
