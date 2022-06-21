import * as React from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import { H1, H2, H3, H4, H5, P, mediaMinWidth } from '../components/styled'
import Section from '../components/Section'
import { Button } from '@mui/material'

export default function CommunityPage() {
  return (
    <Page
      pageName="Community"
      pageDescription={`Community information for Captivate Lighting and Visual Synth`}
    >
      <Section>
        <H2>Community</H2>
        <P>You can find Captivate's community forum on Github</P>
        <P>This is the place to:</P>
        <ul>
          <li>Share Ideas</li>
          <li>Suggest new features</li>
          <li>Ask for help</li>
        </ul>
        <Button
          variant="outlined"
          onClick={(e) =>
            window.open(
              'https://github.com/spensbot/captivate/discussions',
              '_blank'
            )
          }
        >
          Visit the Captivate Community Forum
        </Button>
      </Section>
    </Page>
  )
}
