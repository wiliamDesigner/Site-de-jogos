# EPLAY

EPLAY e uma interface de loja de jogos criada com React, TypeScript e styled-components. O projeto exibe um destaque principal, listas de produtos em promocao e secoes por categoria.

## Funcionalidades

- Pagina inicial com banner de destaque.
- Listagem de jogos em promocao.
- Listagem de jogos em breve.
- Pagina de categorias com secoes de RPG, acao, aventura e terror.
- Componentes reutilizaveis para cabecalho, banner, cards de produto, tags e botoes.
- Navegacao entre paginas com React Router.

## Tecnologias utilizadas

- React
- TypeScript
- React Router DOM
- styled-components
- Create React App
- ESLint e Prettier

## Como executar o projeto

Antes de comecar, tenha o Node.js instalado na maquina.

1. Instale as dependencias:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm start
```

3. Acesse no navegador:

```text
http://localhost:3000
```

## Scripts disponiveis

```bash
npm start
```

Executa o projeto em modo de desenvolvimento.

```bash
npm test
```

Executa os testes em modo interativo.

```bash
npm run build
```

Gera a versao de producao na pasta `build`.

```bash
npm run eject
```

Expoe as configuracoes internas do Create React App. Essa acao nao pode ser desfeita facilmente, entao use apenas se for realmente necessario.

## Estrutura do projeto

```text
public/
  index.html
  manifest.json
  robots.txt

src/
  assets/
    image/images/
  components/
    Banner/
    Butoon/
    Header/
    Product/
    ProductsList/
    Tag/
  Models/
    Games.ts
  pages/
    Categoria/
    Home/
  App.tsx
  index.tsx
  styles.ts
```

## Paginas

- `/`: pagina inicial com banner, promocoes e jogos em breve.
- `/categoria`: pagina com listas separadas por categorias.

## Componentes principais

- `Header`: cabecalho com logo, links de navegacao e carrinho.
- `Banner`: destaque visual do jogo principal.
- `ProductsList`: recebe uma lista de jogos e renderiza os cards.
- `Product`: card individual de jogo.
- `Tag`: etiqueta usada para categorias, plataformas, precos e descontos.
- `Butoon`: componente de botao ou link estilizado.

## Modelo de dados

Os jogos seguem o modelo definido em `src/Models/Games.ts`:

```ts
class Game {
  id: number
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string
}
```

## Observacoes

- Os dados dos jogos estao definidos diretamente nas paginas `Home` e `Categoria`.
- As imagens utilizadas ficam em `src/assets/image/images`.
- O componente esta nomeado como `Butoon` no projeto, entao o README preserva esse nome para corresponder a estrutura atual.
