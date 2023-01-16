import styled from 'styled-components'
import media from 'styled-media-query'

export const HomeContainer = styled.div``

export const LandingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 4rem;

  ${media.lessThan('large')`
    grid-template-columns: 1fr;
    gap: 20px;
  `};
`

export const LandingInfos = styled.div`
  h1 {
    font-size: 48px;
    line-height: 1.3;
    color: #272221;

    ${media.lessThan('medium')`
      text-align: center;
    `}
  }

  p {
    font-size: 18px;
    line-height: 1.3;
    margin-top: 2rem;
    color: #403937;
  }
`

export const LandingContainerImage = styled.div`
  text-align: center;

  ${media.lessThan('medium')`
    img {
      width: 80%;
    }
  `}
`

export const ItemsContainer = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 2rem;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
    justify-content: center;
  `}
`

export const Item = styled.span`
  display: flex;
  align-items: center;
  color: #574f4d;
  font-size: 16px;
`

interface ItemIconProps {
  background: string
}

export const ItemIcon = styled.div<ItemIconProps>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};
  border-radius: 50%;
  margin-right: 0.5rem;
`

export const CoffeeContainer = styled.div`
  width: 100%;
  margin: 4rem 0;
`

export const CoffeeListTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #403937;
`
export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 300px));
  gap: 32px;
  margin-top: 3.5rem;

  ${media.lessThan('large')`
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  `}
`
