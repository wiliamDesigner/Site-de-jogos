import { HeaderBar, Links, LinkItem, Linkcart } from './styles'
import logo from '../../assets/image/images/logo.svg'
import carrinho from '../../assets/image/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="eplay" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Categoria</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <Linkcart href="#">
      0 - produto(s)
      <img src={carrinho} alt="carrinho" />
    </Linkcart>
  </HeaderBar>
)

export default Header
