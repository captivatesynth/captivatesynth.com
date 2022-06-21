import * as React from 'react'
import styled from 'styled-components'
import { download_url } from '../strings'

export default function DownloadButton({ filename, enabled, children }) {
  return (
    <Root
      href={enabled ? download_url(filename) : undefined}
      download={enabled ? filename : undefined}
      enabled={enabled}
    >
      {children}
    </Root>
  )
}

const Root = styled.a`
  opacity: ${(p) => (p.enabled ? 1 : 0.3)};
  padding: 1.5rem 2rem;
  color: #fff;
  background-color: #55e;
  border: 2px solid #fff;
  border-radius: 0.5rem;
  margin: 1rem;
  font-size: 1rem;
  user-select: none;
  ${(p) =>
    p.enabled
      ? `  cursor: pointer;
  :hover {
    border: 2px solid #55e;
  }`
      : ''}
`
