import React from 'react'
import styled from 'styled-components'

export default function FixedARVideo({ src, ar, maxWidth }) {
  return (
    <div style={{ maxWidth: maxWidth }}>
      <VideoWrapper style={{ paddingBottom: `${(1 / ar) * 100}%` }}>
        <Iframe
          title="YouTube video player"
          src={src}
          frameborder="0"
          allowfullscreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </VideoWrapper>
    </div>
  )
}

const VideoWrapper = styled.div`
  position: relative;
  height: 0;
`

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0px solid white;
`
