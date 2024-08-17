import { Link } from 'react-router-dom';
import './styles.css';

export default function Cabecalho()
{
   return (
      <>
         <header>
            <div className="vs-conteiner">
               <Link to="/">
                  <h1 className="titulo-cabecalho">MeuSite</h1>
               </Link>               
            </div>
         </header>
      </>      
   );
}