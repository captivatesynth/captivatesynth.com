import * as React from 'react'
import styled from 'styled-components'
import { mediaMinWidth } from './styled'
import MenuButton from './MenuButton'
import zIndexes from '../zIndexes'
import { StaticImage } from 'gatsby-plugin-image'
import icon from '../../static/icon.svg'

const speed = 0.1

export default function WrappedHeader({ expanded }) {
  if (expanded) {
    return <Header expanded fixed />
  } else {
    return (
      <>
        <Header invisible />
        <Header fixed />
      </>
    )
  }
}

function Header({ expanded, fixed, invisible }) {
  const [ease, setEase] = React.useState(1)

  React.useEffect(() => {
    const animate = () => {
      if (window.scrollY > window.innerHeight && ease > 0) {
        setEase(Math.max(ease - speed, 0))
      }
      if (window.scrollY < window.innerHeight && ease < 1) {
        setEase(Math.min(ease + speed, 1))
      }
    }

    window.addEventListener('scroll', animate, { passive: true })

    const handle = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(handle)
      window.removeEventListener('scroll', animate)
    }
  }, [ease])

  const outEase = expanded ? ease : 0

  // const backgroundColor = `rgba(0, 0, 0, ${1 - outEase * (1 - opacity)})`
  const backgroundColor = 'rgba(0, 0, 0, 1)'
  const boxShadow = `0px 0px 15px 0px ${backgroundColor}`

  return (
    <Root
      style={{
        top: `${-outEase * 5}rem`,
        position: fixed ? 'fixed' : undefined,
        padding: '0.5rem 1rem',
        backgroundColor: backgroundColor,
        boxShadow: boxShadow,
        WebkitBoxShadow: boxShadow,
        visibility: invisible ? 'hidden' : 'visible',
      }}
    >
      <FlexWrap onClick={(e) => (window.location.href = '/')}>
        <Title style={{ fontSize: `1.5 rem` }}>Captivate</Title>
        <img
          src={icon}
          style={{
            width: `2rem`,
            marginRight: '2rem',
          }}
          alt="Captivate Logo (a red, green, and blue cube)"
        />
        <Spacer />
        <SubTitle style={{ fontSize: `1rem` }}>
          Lighting & Visual Synth
        </SubTitle>
      </FlexWrap>
      <div style={{ width: '1rem' }} />
      <MenuButton />
    </Root>
  )
}

const Root = styled.div`
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  color: #eee;
  box-sizing: border-box;
  z-index: ${zIndexes.header};
`

const Title = styled.h1`
  /* font-size: 5rem;
  @media (min-width: ${mediaMinWidth}) {
    font-size: 3rem;
  } */
  margin: 0 0.5rem 0 0;
`

const Spacer = styled.div`
  flex: 1 0 0;
`

const SubTitle = styled.h1`
  /* font-size: 3rem;
  @media (min-width: ${mediaMinWidth}) {
    font-size: 2rem;
  } */
  color: #aaa;
  margin: 0;
`

const FlexWrap = styled.div`
  display: flex;
  align-items: center;
  color: #eee;
  flex-grow: 1;
  flex-wrap: wrap;
  cursor: pointer;
`
