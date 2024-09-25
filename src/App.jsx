import {BrowserRouter, Route, Routes} from 'react-router-dom'
import GlobalStyles from "./styles/global"
import Home from "./pages/Home"
import CadastrarDenuncia from "./pages/services/services"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cadastro' element={<CadastrarDenuncia/>}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
