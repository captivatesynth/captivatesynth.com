import * as React from 'react'
import styled from 'styled-components'
import { P } from './styled'

export default function Footer() {
  return (
    <Root>
      <p>Captivate is currently in beta. Use at your own risk</p>
      <p>Made with ❤️ in Portland, OR</p>
      <Link href="https://www.sailingtomars.com">
        More from Sailing To Mars
      </Link>
    </Root>
  )
}

const Root = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #000;
  color: #aaa;
  font-size: 0.8rem;
`

const Link = styled.a`
  color: hsl(225.8181818181818, 100%, 78.43137254901961%);
`
