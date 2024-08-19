import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Principal from './paginas/Principal'
import Corpo from './paginas/Principal/Corpo';
import Promocao from './paginas/Principal/Promocao'
import Inscricao from './paginas/Inscricao';

function App()
{
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal/>}>
            <Route index element={<Corpo/>}/>
            <Route path='promocao' element={<Promocao/>}/>            
          </Route>
          <Route path='inscricao' element={<Inscricao/>}/>
        </Routes>
      </BrowserRouter>            
    </>
  );
}

export default App
