import Product from '../Product'

import { Container, List } from './styles'

type Props = {
  titulo: string
  background: 'gray' | 'black'
}

const ProductList = ({ background, titulo }: Props) => (
  <Container>
    <h2>{titulo}</h2>
    <div className="container">
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </div>
  </Container>
)

export default ProductList
