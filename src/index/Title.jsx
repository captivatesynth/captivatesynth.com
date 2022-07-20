import * as React from 'react'
import styled from 'styled-components'
import FixedARVideo from '../components/FixedARVideo'
import { H1 } from '../components/styled'
import icon from '../../static/icon.svg'
import MenuButton from '../components/MenuButton'

export default function Title() {
  return (
    <Root gradient={true}>
      <Wrapper>
        <Row>
          <Row style={{ flexWrap: 'wrap' }}>
            <TitleText>Captivate</TitleText>
            <img
              src={icon}
              style={{
                width: `3rem`,
                marginRight: '2rem',
              }}
              alt="Captivate Logo (a red, green, and blue cube)"
            />
            <div style={{ flex: '1 0 0' }} />
            <SubText>Lighting & Visual Synth</SubText>
          </Row>
          <div style={{ flex: '1 0 0', width: '1rem' }} />
          <MenuButton />
        </Row>
        <div style={{ flex: '1 0 0' }} />
        <VideoWrapper>
          <FixedARVideo
            src="https://www.youtube.com/embed/6ZwQ97sySq0"
            ar={16 / 9}
          />
        </VideoWrapper>
        <div style={{ flex: '1 0 0' }} />
        <More
          onClick={() =>
            document
              .getElementById('subtitle')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          SCROLL TO LEARN HOW IT WORKS
        </More>
      </Wrapper>
    </Root>
  )
}

const Row = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
`

const TitleText = styled.h1`
  font-size: 3rem;
  margin: 0 1rem 0 0;
  padding: 0;
`

const SubText = styled.h2`
  font-size: 2rem;
  color: #aaa;
`

const Root = styled.div`
  color: #eee;
  background-color: #000;
  min-height: 100vh;
  /* background: radial-gradient(#ff00ee, #ffd500); */
  background-color: #000;
  position: relative;
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  flex: 1 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 130vh;
`

const More = styled.div`
  color: #eee;
  cursor: pointer;
`
