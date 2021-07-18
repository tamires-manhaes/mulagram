import { FunctionComponent } from 'react'

import { Container } from './styles'

const Header: FunctionComponent = ({ children }) => (
  <Container data-testid="header">
    <span>{children}</span>
  </Container>
)

export default Header
