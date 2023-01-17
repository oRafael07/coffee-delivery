import * as css from './styles'
import CoffeeImage from '../../assets/imagem.svg'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { CoffeeCard } from '../../components/CoffeeCard'

export interface ICoffee {
  id: number
  title: string
  description: string
  tags: string[]
  amount: number
  image: string
}

const data: ICoffee[] = [
  {
    id: 1,
    title: 'Expresso',
    description: 'Cafe',
    tags: ['Gelado'],
    amount: 9.9,
    image: './Coffee.svg',
  },
  {
    id: 2,
    title: 'Café Preto',
    description: 'Cafe quente',
    tags: ['Quente'],
    amount: 9.9,
    image: './Coffee.svg',
  },
  {
    id: 3,
    title: 'Café com leite',
    description: 'Cafe quente com leite',
    tags: ['Quente', 'Leite'],
    amount: 10.9,
    image: './Coffee.svg',
  },
]

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
            {data.map((coffee) => (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                title={coffee.title}
                description={coffee.description}
                tags={coffee.tags}
                amount={coffee.amount}
                image={coffee.image}
              />
            ))}
          </css.CoffeeList>
        </css.CoffeeContainer>
      </section>
    </css.HomeContainer>
  )
}
