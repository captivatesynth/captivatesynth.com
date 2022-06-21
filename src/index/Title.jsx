import * as React from 'react'
import styled from 'styled-components'
import randoCirclesSvg from '../components/randoCirclesSvg'
import icon from '../../static/icon.svg'

const GRADIENT_KEY = 'is-gradient'

export default function Title() {
  return (
    <Root gradient={true}>
      <StarWrapper style={{ animationDuration: '200000ms' }}>
        <Stars />
      </StarWrapper>
      <StarWrapper style={{ animationDuration: '100000ms' }}>
        <Stars />
      </StarWrapper>
      <StarWrapper style={{ animationDuration: '100000ms' }}>
        <Stars />
      </StarWrapper>
      {layer(100)}
      {layer(200)}
      {layer(300)}
      {layer(400)}
      {layer(500)}
      <Logo>
        <img
          src={icon}
          width="10rem"
          height="10rem"
          style={{ width: '10rem', height: '10rem' }}
          alt="Captivate Logo (a red, green, and blue cube)"
        ></img>
      </Logo>
    </Root>
  )
}

function layer(delay_seconds) {
  return (
    <StarWrapper style={{ animationDuration: `${delay_seconds * 1000}ms` }}>
      <Stars />
    </StarWrapper>
  )
}

function Stars() {
  return (
    <img
      width="100%"
      height="100%"
      src={`data:image/svg+xml;utf8,${randoCirclesSvg(100, 100)}`}
      alt="A bunch of white circles with random placement and opacity"
    />
  )
}

const Logo = styled.div`
  position: absolute;
`

const StarWrapper = styled.div`
  width: 50rem;
  height: 50rem;
  position: absolute;

  mask-image: radial-gradient(circle closest-side at center, #ffff, #fff0);
  animation-name: spin;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  /* background: radial-gradient(#fd73ff, #726f35); */
`

const Root = styled.div`
  color: #eee;
  background-color: #000;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: radial-gradient(#ff00ee, #ffd500); */
  overflow: hidden;
  background: ${(props) =>
    props.gradient ? `linear-gradient(to right, #bb00a5, #c3ca00)` : ''};
`
