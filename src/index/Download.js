import React, { useState } from 'react'
import styled from 'styled-components'
import Checkbox from '@mui/material/Checkbox'
import { H1, H2, H3, H4, H5, P, mediaMinWidth } from '../components/styled'
import DownloadButton from '../components/DownloadButton'
import {
  MAC_X86_FILENAME,
  MAC_ARM_FILENAME,
  WINDOWS_FILENAME,
} from '../strings'

const ACCEPTED = 'accepted_terms_and_conditions'

export default function Download() {
  const [accepted, setAccepted] = useState(false)

  return (
    <>
      <H3>Download</H3>
      <P>
        Captivate is beta software under active development. Use at your own
        risk
      </P>
      <Row>
        <Checkbox
          id={ACCEPTED}
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        <Label htmlFor={ACCEPTED}>
          I accept the <TermsAndConditions />
        </Label>
      </Row>
      <Row style={{ margin: '0 -1rem' }}>
        <DownloadButton enabled={accepted} filename={MAC_X86_FILENAME}>
          Mac (intel)
        </DownloadButton>
        <DownloadButton enabled={accepted} filename={MAC_ARM_FILENAME}>
          Mac (arm)
        </DownloadButton>
        <DownloadButton enabled={accepted} filename={WINDOWS_FILENAME}>
          Windows (x64)
        </DownloadButton>
      </Row>
    </>
  )
}

function TermsAndConditions() {
  return <a href="/terms_and_conditions">Terms & Conditions</a>
}

const Row = styled.div`
  display: flex;
  align-items: center;
`

const Label = styled.label``
