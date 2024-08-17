import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './paginas/Home'
import CorpoHome from './paginas/Home/CorpoHome'
import Promocao from './paginas/Home/Promocao'
import Inscricao from './paginas/Home/Inscricao';

function App()
{
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route index element={<CorpoHome/>}/>
            <Route path='promocao' element={<Promocao/>}/>
            <Route path='inscricao' element={<Inscricao/>}/>
          </Route>
        </Routes>
      </BrowserRouter>            
    </>
  );
}

export default App
