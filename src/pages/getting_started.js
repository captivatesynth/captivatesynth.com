import * as React from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import { H1, H2, H3, H4, H5, P, mediaMinWidth } from '../components/styled'
import Section from '../components/Section'
import FixedARVideo from '../components/FixedARVideo'

const MAX_VID_WIDTH = '40rem'

export default function GettingStartedPage() {
  return (
    <Page
      pageName="Getting Started"
      pageDescription={`Tutorials for Captivate Lighting and Visual Synth`}
    >
      <Section>
        <H2>Getting Started</H2>
        <P>Start creating incredible lighting and visuals with Captivate</P>
        <P>
          If you haven't already, be sure to{' '}
          <a href="/#download">download Captivate</a>
        </P>
        <H4>1. UI Overview</H4>
        <P>Familiarize yourself with Captivate's UI</P>
        <FixedARVideo
          src="https://www.youtube.com/embed/SxU32oWGrq4"
          ar={16 / 9}
          maxWidth={MAX_VID_WIDTH}
        />
        <H4>2. DMX Universe Setup</H4>
        <P>
          Connect your DMX USB PRO device. Tell Captivate which DMX fixtures you
          have, where they are located in space, and how they work.
        </P>
        <FixedARVideo
          src="https://www.youtube.com/embed/Iii6gR0Sqeg"
          ar={1440 / 900}
          maxWidth={MAX_VID_WIDTH}
        />
        <H4>3. Light Scenes</H4>
        <P>
          Create light scenes with Captivate's intuitive controls. Configure
          Captivate to automatically cycle through scenes for you.
        </P>
        <FixedARVideo
          src="https://www.youtube.com/embed/epzUI_UFjIg"
          ar={1440 / 900}
          maxWidth={MAX_VID_WIDTH}
        />
        <H4>4. Visual Scenes</H4>
        <P>
          Create custom visuals that synchronize to your light scenes. Add
          effects to your visualizers to customize them even further.
        </P>
        <P>
          Add your own videos and images for a completely unique experience.
        </P>
        <FixedARVideo
          src="https://www.youtube.com/embed/ZFH2CgZM18w"
          ar={1920 / 1080}
          maxWidth={MAX_VID_WIDTH}
        />
        <H4>5. Advanced Lighting</H4>
        <P>
          Customize your lighting even further with x/y axis, color maps,
          lighting groups, and the randomization engine.
        </P>
        <FixedARVideo
          src="https://www.youtube.com/embed/stIc3lboHXY"
          ar={1920 / 1080}
          maxWidth={MAX_VID_WIDTH}
        />
        <H4>6. Midi Control</H4>
        <P>Control Captivate with a midi controller</P>
        <FixedARVideo
          src="https://www.youtube.com/embed/SLxdzWcwVdo"
          ar={1920 / 1080}
          maxWidth={MAX_VID_WIDTH}
        />
      </Section>
    </Page>
  )
}

const VideoPlaceholder = styled.div`
  width: 20rem;
  height: 11rem;
  background-color: #111;
`
