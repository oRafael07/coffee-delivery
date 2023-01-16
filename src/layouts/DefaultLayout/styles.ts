import styled from 'styled-components'
import media from 'styled-media-query'

export const LayoutContainer = styled.div`
  padding: 0 10rem;

  ${media.lessThan('medium')`
    padding: 0 2rem;
  `}
`
