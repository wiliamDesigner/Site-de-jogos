import Games from '../../Models/Games'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  titulo: string
  background: 'gray' | 'black'
  games: Games[]
}

const ProductList = ({ background, titulo, games }: Props) => (
  <Container background={background}>
    <h2>{titulo}</h2>
    <div className="container">
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
