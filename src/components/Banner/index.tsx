import { Imagem, Titulo, Precos } from './styles'
import bannerImg from '../../assets/image/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Butoon from '../Butoon'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do Dia</Tag>
      <div>
        <Titulo>Marvel Spider man: Miles Morales Ps4 e Ps5</Titulo>
        <Precos>
          De <span>R$250,00</span> <br />
          por apenas R$99,90
        </Precos>
      </div>
      <Butoon type="link" title="Ir para o produto" to="/produto">
        Aproveitar
      </Butoon>
    </div>
  </Imagem>
)

export default Banner
