class Game {
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string
  id: number

  constructor(
    id: number,
    categoria: string,
    descricao: string,
    imagem: string,
    infos: string[],
    sistema: string,
    titulo: string
  ) {
    this.id = id
    this.category = categoria
    this.description = descricao
    this.image = imagem
    this.infos = infos
    this.system = sistema
    this.title = titulo
  }
}

export default Game
