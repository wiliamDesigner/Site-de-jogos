import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import Game from '../../Models/Games'
import resident from '../../assets/image/images/resident.png'
import zelda from '../../assets/image/images/zelda.png'
import diablo from '../../assets/image/images/diablo.png'
import starwars from '../../assets/image/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'acao',
    description: 'lorem',
    title: 'Resident evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'acao',
    description: 'lorem',
    title: 'Zelda',
    system: 'Nintendo Switch',
    infos: ['10%', 'R$250,00'],
    image: zelda
  },
  {
    id: 3,
    category: 'Rpg',
    description: 'lorem',
    title: 'Diablo',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: diablo
  },
  {
    id: 4,
    category: 'acao',
    description: 'lorem',
    title: 'Starwars',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: starwars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'rpg',
    description: 'lorem',
    title: 'Diablo4',
    system: 'windows',
    infos: ['20%', 'R$240'],
    image: diablo
  },

  {
    id: 6,
    category: 'Aventura',
    description: 'lorem',
    title: 'Zelda',
    system: 'Nintendo switch',
    infos: ['20%', 'R$240'],
    image: zelda
  },

  {
    id: 8,
    category: 'rpg',
    description: 'lorem',
    title: 'Star-wars',
    system: 'windows',
    infos: ['20%', 'R$240'],
    image: starwars
  },

  {
    id: 9,
    category: 'Terror',
    description: 'lorem',
    title: 'Resident Evil',
    system: 'windows',
    infos: ['20%', 'R$240'],
    image: resident
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} titulo="Promoções" background="gray" />
    <ProductList games={emBreve} titulo="Em breve" background="black" />
  </>
)

export default Home
