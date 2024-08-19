import { Outlet } from 'react-router-dom';
import Cabecalho from '../../componentes/Cabecalho';

export default function Home()
{
   return (
      <>
         <Cabecalho/>
         <Outlet/>
      </>
   );
}