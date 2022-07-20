import * as React from 'react'
import styled from 'styled-components'

export default function Section({ alternate, flex, children }) {
  return (
    <Root
      style={{
        backgroundColor: alternate ? '#222' : undefined,
        color: alternate ? '#eee' : undefined,
      }}
    >
      <Container style={{ display: flex ? 'flex' : undefined }}>
        {children}
      </Container>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem;
`

const Container = styled.div`
  width: 100%;
  max-width: 65rem;
  align-items: center;
  flex-wrap: wrap;
  margin: -1rem;
  padding: 5% 0;
`
