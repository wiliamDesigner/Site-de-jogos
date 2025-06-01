import styled from 'styled-components'
import { Cores } from '../../styles'
import { Link } from 'react-router-dom'

const ButtonContainer = styled.button`
  border: 2px solid ${Cores.branca};
  color: ${Cores.branca};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${Cores.branca};
  color: ${Cores.branca};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`
