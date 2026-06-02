import { Tagcontainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
}
const Tag = ({ children, size = 'small' }: Props) => (
  <Tagcontainer size={size}>{children}</Tagcontainer>
)
export default Tag
