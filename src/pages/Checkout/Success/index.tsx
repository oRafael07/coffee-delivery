import * as css from './styles'
import img from '../../../assets/Illustration_success.svg'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

export function CheckoutSuccess() {
  return (
    <css.SuccessContainer>
      <css.SuccessTitle>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é so aguardar que logo que o café chegará até você</p>
      </css.SuccessTitle>
      <css.SuccessBody>
        <css.SuccessInfos>
          <css.SuccessDetail>
            <css.SuccessIconBox backColor="#8047f8">
              <MapPin size={16} color="#fff" />
            </css.SuccessIconBox>
            <css.SuccessDetailLocation>
              <p>
                Entrega em <b>Rua João Daniel Martinelli, 102</b>
                <br />
                Farrapos - Porto Alegre, RS
              </p>
            </css.SuccessDetailLocation>
          </css.SuccessDetail>
          <css.SuccessDetail>
            <css.SuccessIconBox backColor="#DBAC2C">
              <Timer size={16} color="#fff" />
            </css.SuccessIconBox>
            <css.SuccessDetailLocation>
              <p>
                Previsão de entrega <br />
                <b>20 min - 30 min</b>
              </p>
            </css.SuccessDetailLocation>
          </css.SuccessDetail>
          <css.SuccessDetail>
            <css.SuccessIconBox backColor="#C47F17">
              <CurrencyDollar size={16} color="#fff" />
            </css.SuccessIconBox>
            <css.SuccessDetailLocation>
              <p>
                Pagamento na entrega
                <br />
                <b>Cartão de Crédito</b>
              </p>
            </css.SuccessDetailLocation>
          </css.SuccessDetail>
        </css.SuccessInfos>
        <css.SuccessImgContainer>
          <img src={img} alt="" />
        </css.SuccessImgContainer>
      </css.SuccessBody>
    </css.SuccessContainer>
  )
}
