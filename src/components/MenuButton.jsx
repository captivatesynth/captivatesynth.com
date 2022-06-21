import * as React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from './Menu'

export default function MenuButton({ openMenu }) {
  const [open, setOpen] = React.useState(false)

  return (
    <Root>
      <Icon>
        <MenuIcon onClick={() => setOpen(true)} />
      </Icon>
      {open && <Menu onClose={() => setOpen(false)} />}
    </Root>
  )
}

const Root = styled.div``

const Icon = styled.div`
  cursor: pointer;
  padding: 0.8rem;
  margin: -0.5rem;
`
