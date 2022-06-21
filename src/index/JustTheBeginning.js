import * as React from 'react'
import styled from 'styled-components'
import { H1, H2, H3, H4, H5, P, mediaMinWidth } from '../components/styled'
import HardwareIcon from '@mui/icons-material/Keyboard'
import AutomationIcon from '@mui/icons-material/AutoAwesome'
import LightingIcon from '@mui/icons-material/LightMode'
import VisualsIcon from '@mui/icons-material/MovieFilter'

export default function JustTheBeginning() {
  return (
    <>
      <H3>And this is just the beginning</H3>
      <P>
        We have lots of ideas to make Captivate more powerful, flexible, and fun
      </P>
      <Flex>
        <FeatureSection
          title="Lighting"
          items={[
            'Share scenes with other captivate users',
            'More parameters',
            'More & improved modulators',
            'Macro Controls',
          ]}
        />
        <FeatureSection
          title="Visuals"
          items={[
            'More & improved visualizations',
            'Visualizer layers',
            'Projection Mapping',
          ]}
        />
        <FeatureSection
          title="Automation"
          items={['Automated Beatmatching', 'AI Automated Paramter Control']}
        />
        <FeatureSection
          title="Hardware"
          items={[
            'Official DMX USB Interface',
            'Standalone DMX Controller (For running scenes without a computer)',
          ]}
        />
      </Flex>
    </>
  )
}

function Icon({ title }) {
  switch (title) {
    case 'Lighting':
      return <LightingIcon fontSize="inherit" />
    case 'Visuals':
      return <VisualsIcon fontSize="inherit" />
    case 'Automation':
      return <AutomationIcon fontSize="inherit" />
    case 'Hardware':
      return <HardwareIcon fontSize="inherit" />
  }
}

function FeatureSection({ title, items }) {
  return (
    <FCRoot>
      <FCIcon>
        <Icon title={title} />
      </FCIcon>
      <FCRest>
        <H5>{title}</H5>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </FCRest>
    </FCRoot>
  )
}

const FCRoot = styled.div`
  flex: 1 1 25rem;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin: 0 1rem;
`

const FCIcon = styled.div`
  margin-right: 2rem;
  font-size: 4rem;
`

const FCRest = styled.div``

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: -1rem;
`
