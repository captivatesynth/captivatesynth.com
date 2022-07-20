import * as React from 'react'
import styled from 'styled-components'
import randoCirclesSvg from '../components/randoCirclesSvg'
import icon from '../../static/icon.svg'
import { H1, H2, H3, H4, H5, H6, P, mediaMinWidth } from '../components/styled'
import Section from '../components/Section'

const GRADIENT_KEY = 'is-gradient'

export default function SubTitle() {
  return (
    <Root gradient={true}>
      {layer(100)}
      {layer(200)}
      {layer(300)}
      {layer(400)}
      {layer(500)}
      <Section>
        <Row>
          <Logo>
            <img
              src={icon}
              width="10rem"
              height="10rem"
              style={{ width: '10rem', height: '10rem' }}
              alt="Captivate Logo (a red, green, and blue cube)"
            ></img>
          </Logo>
          <Stuff>
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
          </Stuff>
        </Row>
      </Section>
    </Root>
  )
}

function layer(delay_seconds) {
  return (
    <StarWrapper style={{ animationDuration: `${delay_seconds * 1000}ms` }}>
      testingalsajd;lfkj a;sldkfj a;lsdkfj a;lsdkfj l;k
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
  margin: 0 1rem;
  z-index: 1;
`

const Stuff = styled.div`
  margin: 0 1rem;
  flex: 1 1 30rem;
  color: #000;
  z-index: 1;
`

const StarWrapper = styled.div`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  width: 50rem;
  height: 50rem;
  position: absolute;

  mask-image: radial-gradient(circle closest-side at center, #ffff, #fff0);
  animation-name: spin;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  /* background: radial-gradient(#fd73ff, #726f35); */
`

const Root = styled.div`
  color: #eee;
  background-color: #000;
  /* background: radial-gradient(#ff00ee, #ffd500); */
  overflow: hidden;
  position: relative;
  background: ${(props) =>
    props.gradient ? `linear-gradient(to right, #ff6bee, #faff67)` : ''};
`

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem 0;
`
