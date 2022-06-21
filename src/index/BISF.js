import * as React from 'react'
import styled from 'styled-components'
import { H1, H2, H3, H4, H5, P, mediaMinWidth } from '../components/styled'
import AutomationIcon from '@mui/icons-material/AutoAwesome'
import LocalFloristIcon from '@mui/icons-material/LocalFlorist'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'

export default function BISF() {
  return (
    <>
      <FeatureSection title="Beautiful" description="It really is" />
      <FeatureSection
        title="Intuitive"
        description='Let Captivate automate the show for you, or plug in a midi controller
        and "play" your visuals like an instrument.'
      />
      <FeatureSection
        title="Synchronized"
        description="Ableton Link integration allows lights and visuals to synchonize
        automatically with other software"
      />
      <FeatureSection
        title="Fun"
        description="With captivate, designing visuals is a blast"
      />
    </>
  )
}

function Icon({ title }) {
  switch (title) {
    case 'Beautiful':
      return <>{'😍'}</>
    case 'Intuitive':
      return <>{'👌'}</>
    case 'Synchronized':
      return <>{'✨'}</>
    case 'Fun':
      return <>{'🔥'}</>
    default:
      return null
  }
}

function FeatureSection({ title, description }) {
  return (
    <FCRoot>
      <FCTitle>
        <FCIcon>
          <Icon title={title} />
        </FCIcon>
        <div style={{ width: '0rem' }} />
        <H3>{title}</H3>
      </FCTitle>
      <FCRest>
        <P>{description}</P>
      </FCRest>
    </FCRoot>
  )
}

const FCTitle = styled.div`
  display: flex;
  align-items: center;
`

const FCRoot = styled.div``

const FCIcon = styled.div`
  margin-right: 2rem;
  font-size: 4rem;
`

const FCRest = styled.div`
  margin-top: -1rem;
`

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: -1rem;
`
