import * as css from './styles'
import CoffeeImage from '../../assets/imagem.svg'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Home() {
  return (
    <css.HomeContainer>
      <section id="landing">
        <css.LandingContainer>
          <css.LandingInfos>
            <h1>
              Encontre o café perfeito
              <br />
              para qualquer hora do dia
            </h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <css.ItemsContainer>
              <css.Item>
                <css.ItemIcon background="#C47F17">
                  <ShoppingCart size={18} color="#ffff" fill="#ffff" />
                </css.ItemIcon>
                Compra simples e segura
              </css.Item>
              <css.Item>
                <css.ItemIcon background="#574F4D">
                  <Package size={18} color="#ffff" fill="#ffff" />
                </css.ItemIcon>
                Entrega rápida e rastreada
              </css.Item>
              <css.Item>
                <css.ItemIcon background="#DBAC2C">
                  <Timer size={18} color="#ffff" fill="#ffff" />
                </css.ItemIcon>
                Embalagem mantém o café intacto
              </css.Item>
              <css.Item>
                <css.ItemIcon background="#8047F8">
                  <Coffee size={18} color="#ffff" fill="#ffff" />
                </css.ItemIcon>
                O café chega fresquinho até você
              </css.Item>
            </css.ItemsContainer>
          </css.LandingInfos>
          <css.LandingContainerImage>
            <img src={CoffeeImage} alt="Foto de copo de café" />
          </css.LandingContainerImage>
        </css.LandingContainer>
      </section>
      <section id="coffers">
        <css.CoffeeContainer>
          <css.CoffeeListTitle>Nossos cafés</css.CoffeeListTitle>
          <css.CoffeeList>
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
          </css.CoffeeList>
        </css.CoffeeContainer>
      </section>
    </css.HomeContainer>
  )
}
