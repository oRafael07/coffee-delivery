import * as css from './styles'
import Logo from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <css.HeaderContainer>
      <img src={Logo} alt="Copo de café com um foguete decolando no meio" />
      <css.HeaderMenu>
        <css.HeaderItem>
          <css.HeaderLink to="/" background="purple" textColor="#4B2995">
            <MapPin size={22} color="#8047f8" />
            Manaus, AM
          </css.HeaderLink>
        </css.HeaderItem>

        <css.HeaderItem>
          <css.HeaderLink
            to="/checkout"
            background="orange"
            textColor="#C47F17"
          >
            <css.CounterCart>1</css.CounterCart>
            <ShoppingCart size={24} />
          </css.HeaderLink>
        </css.HeaderItem>
      </css.HeaderMenu>
    </css.HeaderContainer>
  )
}
