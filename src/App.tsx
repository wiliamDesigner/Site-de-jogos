import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import Categoria from './pages/Categoria'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categoria" element={<Categoria />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
