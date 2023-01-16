import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  border-radius: 6px 36px 6px 36px;
  padding: 2rem 2rem 1rem 2rem;
  background: #f3f2f2;

  h1 {
    text-align: center;
    font-size: 25px;
    color: #403937;
  }

  p {
    text-align: center;
    color: #8d8686;
  }
`

export const CoffeeCardImageContainer = styled.div`
  text-align: center;
  transform: translateY(-40%);
  padding: 0;
`

export const CoffeeTagsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, auto));
  justify-content: center;
  gap: 10px;
  transform: translateY(-50%);
`

export const CoffeeCardTag = styled.span`
  background: #f1e9c9;
  color: #c47f17;
  border-radius: 20px;
  text-align: center;
  padding: 3px 10px;
  font-size: 12px;
  font-weight: bold;
`

export const CoffeeCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  p {
    color: #574f4d;
    font-size: 16px;
  }

  p b {
    font-size: 24px;
    font-weight: bold;
  }
`

export const CoffeeCardFooterActions = styled.div`
  display: flex;
  gap: 8px;

  button {
    border: 0;
    background: #4b2995;
    line-height: 0;
    padding: 8px;
    border-radius: 6px;
    cursor: pointer;
  }
`
