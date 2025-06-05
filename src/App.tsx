import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss } from './styles'
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home/>(
      <>
        <Banner />
        <ProductList titulo="Promoções" background="gray" />
        <ProductList titulo="Em breve" background="black" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
        <RouterProvider router={rotas} />
      </div>
    </>
  )
}

export default App
