import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//place-hold.it/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum commodi,
      dolorem neque, unde dolor qui amet, repellat harum ipsam labore quae iure
      iusto exercitationem esse eos placeat nostrum assumenda quas?
    </Descricao>
  </Card>
)

export default Product
