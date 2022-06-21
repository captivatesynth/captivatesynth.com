import styled from 'styled-components'

export const mediaMinWidth = '45rem'

export const H1 = styled.h1`
  font-size: 3rem;
  @media (min-width: ${mediaMinWidth}) {
    font-size: 5rem;
  }
`

export const H2 = styled.h2`
  font-size: 2.5rem;
  @media (min-width: ${mediaMinWidth}) {
    font-size: 4rem;
  }
`

export const H3 = styled.h3`
  font-size: 2rem;
  @media (min-width: ${mediaMinWidth}) {
    font-size: 3rem;
  }
`

export const H4 = styled.h4`
  font-size: 1.5rem;
  @media (min-width: ${mediaMinWidth}) {
    font-size: 2rem;
  }
`

export const H5 = styled.h5`
  font-size: 1.3rem;
  @media (min-width: ${mediaMinWidth}) {
    font-size: 1.7rem;
  }
`

export const H6 = styled.h6`
  font-size: 1.1rem;
  @media (min-width: ${mediaMinWidth}) {
    font-size: 1.3rem;
  }
`

export const P = styled.p`
  font-size: 1rem;
`
