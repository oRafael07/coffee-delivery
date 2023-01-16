import styled from 'styled-components'
import media from 'styled-media-query'

export const SuccessContainer = styled.div`
  width: 100%;
`

export const SuccessTitle = styled.div`
  margin: 4rem 0;

  h1 {
    color: #c47f17;
  }

  p {
    font-size: 20px;
  }
`

export const SuccessBody = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`

export const SuccessInfos = styled.div`
  padding: 40px;
  border-radius: 6px 36px 6px 36px;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(45deg, #dbac2c, #8047f8) border-box;
  border: 1px solid transparent;
`

export const SuccessDetail = styled.div`
  display: flex;
  margin: 10px 0;
`

interface SuccessIconBoxProps {
  backColor: string
}

export const SuccessIconBox = styled.div<SuccessIconBoxProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${(props) => props.backColor};

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`

export const SuccessDetailLocation = styled.div``

export const SuccessImgContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    ${media.lessThan('medium')`
      width: 100%;
    `}
  }
`
