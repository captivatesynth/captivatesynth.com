import * as React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close'
import zIndexes from '../zIndexes'

export default function Menu({ onClose }) {
  return (
    <>
      <Dimmer onClick={onClose} />
      <MenuRoot>
        <CloseButton onClick={onClose} style={{ color: '#fff' }}>
          <CloseIcon style={{ margin: 0 }} />
        </CloseButton>
        <MenuItem href="/">HOME</MenuItem>
        <MenuItem href="/#download" onClick={onClose}>
          DOWNLOAD
        </MenuItem>
        <MenuItem href="/getting_started">GETTING STARTED</MenuItem>
        <MenuItem href="/recommended_equipment">RECOMMENDED EQUIPMENT</MenuItem>
        <MenuItem href="/terms_and_conditions">TERMS & CONDITIONS</MenuItem>
        <MenuItem href="/community">COMMUNITY</MenuItem>
      </MenuRoot>
    </>
  )
}

const Dimmer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #0005;
`

const CloseButton = styled.div`
  padding: 1rem;
  margin: -1rem -1rem 0rem 0rem;
`

const MenuRoot = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  top: 0;
  /* left: 0; */
  right: 0;
  bottom: 0;
  background-color: #000;
  padding: 3rem;
  padding-bottom: 2rem;
  z-index: ${zIndexes.menu};
`

const MenuItem = styled.a`
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  margin-bottom: 2rem;
  :hover {
    text-decoration: underline;
  }
`
