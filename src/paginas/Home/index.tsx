import { Outlet } from 'react-router-dom';
import Cabecalho from '../../componentes/Cabecalho';
import './styles.css';

export default function Home()
{
   return (
      <>
         <Cabecalho/>
         <Outlet/>
      </>
   );
}