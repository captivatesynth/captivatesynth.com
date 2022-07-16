import * as React from 'react'
import styled from 'styled-components'
import randoCirclesSvg from '../components/randoCirclesSvg'
import icon from '../../static/icon.svg'
import { H1, H2, H3, H4, H5, H6, P, mediaMinWidth } from '../components/styled'

const GRADIENT_KEY = 'is-gradient'

export default function SubTitle() {
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
      {/* <Logo>
        <img
          src={icon}
          width="10rem"
          height="10rem"
          style={{ width: '10rem', height: '10rem' }}
          alt="Captivate Logo (a red, green, and blue cube)"
        ></img>
      </Logo> */}
      <Stuff>
        <SubSection>
          <H3>Live DMX Lighting and Visuals</H3>
          <P>This is how visual creation is supposed to feel</P>
          <H4>Synchronized with Ableton Link</H4>
          <P>
            You can also synchronize manually with tap tempo. Or wait for our
            upcoming live beat-detection feature!
          </P>
          <H4>Free & Open Source</H4>
          <a href="https://github.com/spensbot/captivate">
            View the code on Github
          </a>
        </SubSection>
      </Stuff>
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

const Stuff = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #00000011;
`

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
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: radial-gradient(#ff00ee, #ffd500); */
  overflow: clip;
  background: ${(props) =>
    props.gradient ? `linear-gradient(to right, #bb00a5, #c3ca00)` : ''};
`

const SubSection = styled.div`
  flex: 1 0 0;
  min-width: 15rem;
  margin: 1rem;
`
