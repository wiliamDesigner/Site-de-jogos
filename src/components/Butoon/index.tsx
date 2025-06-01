import { Children } from 'react'
import { ButtonContainer, ButtonLink } from './styles'
import { title } from 'process'

type Prosps = {
  type: 'button' | 'link'
  title: string
  to?: string
  onclick?: () => void
  children: string
}

const Button = ({ type }: Prosps) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onclick={onclick}>
        {Children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink to={to as string} title={title}>
      {Children}
    </ButtonLink>
  )
}
export default Button
